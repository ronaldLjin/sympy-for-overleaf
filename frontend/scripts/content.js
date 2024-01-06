const BASE_URL = "http://127.0.0.1:8000";

// finds the rightmost index of the last prefix of stringB in stringA
function findLastIndexOfPrefix(stringA, stringB) {
  const lastIndex = stringA.lastIndexOf(stringB);
  let p;
  if (lastIndex !== -1) {
    p = lastIndex + stringB.length;
  } else {
    p = stringA.length;
    while (!stringB.endsWith(stringA.substring(0, p))) {
      p--;
    }
  }
  return p;
}

// inserts the solution right after the user's selection
function insertSolution(endContainer, selection, solution, action) {
  if (!solution || endContainer.nodeType !== Node.TEXT_NODE) {
    return;
  }

  const textContent = endContainer.textContent;
  let i = findLastIndexOfPrefix(textContent, selection);
  if (i !== -1) {
    const prefix = textContent.slice(0, i);
    const suffix = textContent.slice(i);
    let separator;

    switch (action) {
      case "solve":
        separator = ", ";
        break;
      case "error":
        separator = " **";
        break;
      default:
        separator = " = ";
    }

    endContainer.textContent = `${prefix}${separator}${solution}${suffix}`;
  }
}

chrome.runtime.onMessage.addListener((message) => {
  if (message.command === "get-selected-text") {
    const selection = window.getSelection();
    const selectionText = selection.toString();

    if (selectionText) {
      const endContainer = selection.getRangeAt(0).endContainer;

      chrome.storage.local.get(["sympy-action"]).then((result) => {
        const action = result["sympy-action"] || "simplify";
        const apiUrl = `${BASE_URL}/${action}?equation=${encodeURIComponent(
          selectionText
        )}`;

        fetch(apiUrl)
          .then((res) => res.json())
          .then((data) => {
            if (["\\text{True}", "\\text{False}"].includes(data.solution))
              return;
            if (data.solution) {
              insertSolution(
                endContainer,
                selectionText,
                data.solution,
                action
              );
            } else if (data.error) {
              const errorText = data.error.startsWith("I don't understand this")
                ? "I don't understand this"
                : data.error;
              insertSolution(endContainer, selectionText, errorText, "error");
            }
          });
      });
    }
  }
});
