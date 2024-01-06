# SymPy for Overleaf

SymPy for Overleaf is an easy-to-use Chrome extension that can evaluate LaTeX math expressions.

## Description

This chrome extension allows users to easily evaluate highlighted LaTeX math expressions just by pressing "Ctrl + Shift + S" on their keyboard. Users can configure what SymPy operation they wan't to perform via a dropdown found in the extension pop-up. SymPy for Overleaf currently only supports the generic "solve" and "simplify" operations, but is easily scalable to support virtually any SymPy operation.

## Getting Started

### Dependencies

- Webpack
- Node.js
- Python3

### Installing

#### Setting Up the Back-End

1. Navigate to the `backend` directory

   ```
   cd backend
   ```

2. Create a virtual environment

   ```
   python -m venv venv
   ```

3. Invoke the virtual environment

   ```
   source venv/bin/activate
   ```

4. Install requirements

   ```
   pip install -r requirements.txt
   ```

5. Start the server

   ```
   uvicorn main:app
   ```

   If you wan't live reloading, use the `--reload` flag.

#### Setting Up the Front-End

1. Navigate to the `frontend` directory

   ```
   cd frontend
   ```

   \*Note: make sure you are in the base directory for the above command to work

2. Install dependencies

   ```
   npm install
   ```

3. Run `npx webpack`
4. In chrome, navigate to [chrome://extensions](chrome://extensions/)
5. Click "Load Unpacked" in the top-left corner, select the `frontend/dist` folder
6. The extension should load successfully, and should be ready to use.

#### Basic Usage

1.  Navigate to any Overleaf project
2.  Highlight any valid latex math expression. Do not include the prefix or suffix of math mode (e.g. "\$", "\$\$", "\\[", "\\]").
3.  Press "Ctrl + Shift + S"
4.  The result should be printed to the right of the selection
5.  To switch the SymPy operation being performed, open the extension's pop-up, and select the desired operation in the drop-down.

    **Note:** the user's selection will persist

<!--

## Help

## Authors

## Version History

-->
