# Using ESLint in Visual Studio Code

In the last class, we started using ESLint. You can learn more about this tool on the project's website or the NPM package page.

To make the linter easier to use, we utilized an extension for more comfortable markup in VSCode.

To "invoke" ESLint in VSCode and organize your code automatically, use the shortcut `Ctrl + Shift + P` (Windows/Linux) or `Cmd + Shift + P` (MacOS), type `Eslint`, and choose the "Fix all auto-fixable problems" option. Alternatively, place the blinking cursor over any of the red underlined lines and use the shortcut `Ctrl + .` to open the Eslint menu and select "Fix all auto-fixable problems" if available.

Some linter errors are not "auto-fixable." When this occurs, we need to read the type of error that ESLint is reporting and, if necessary, consult the documentation to better understand the problem and how we can deal with it.
