chrome.commands.onCommand.addListener(function (command) {
  switch (command) {
    case "apply-action":
      chrome.tabs.query({ active: true, currentWindow: true }, function (tab) {
        if (tab[0]?.id) {
          chrome.tabs.sendMessage(tab[0].id, { command: "get-selected-text" });
        }
      });
      break;
    default:
      console.log(`Command ${command} not found`);
  }
});
