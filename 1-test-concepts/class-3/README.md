# Introduction to Development with Tests in JavaScript

## Environment Setting

- Use of the text editor **VS Code** recommended for its useful extensions for the course.
- Creation of an `index.js` file for a time bank management system.

## Practical Example: Overtime Sum Function

- Implementation of a function `somaHorasExtras` that calculates the total salary with overtime.
- Demonstration of execution with `console.log` to test the functionality.

## Error Correction and ESLint

- Identification of a variable not defined error during execution with Node.js.
- Introduction to **ESLint**, a tool for static code analysis that helps identify and fix errors.

## Configuring ESLint

- Initialization of an NPM project and installation of ESLint as a development dependency.

```bash
npm init -y
```

```bash
npm install --save-dev eslint@8.16.0
```

## Running ESLint

- Using the `npx eslint --init` command to configure ESLint with specific preferences, such as using modern JavaScript modules and the Airbnb code style.
  - To check syntax, find problems, and enforce code style;
  - Javascript modules (import/export);
  - None of these;
  - No;
  - Node;
  - Use a popular style guide -> Airbnb;
  - JSON;
  - Yes;
  - npm;
- Execution of ESLint on the `index.js` file to identify problems according to the established rules.

```bash
npx eslint index.js
```

To fix:

```bash
npx eslint index.js --fix
```

## Code adjustments with ESLint

- Correction of problems identified by ESLint, such as unnecessary spaces, missing semicolons and unnecessary code blocks.

## ESLint integration in VS Code

- Installation of the ESLint plugin in VS Code for continuous code analysis, facilitating code standard maintenance.

## Next steps

- Preparation to move towards unit testing, with a focus on improving code quality and reliability through automated testing.

## Conclusion

This segment introduces the initial setup and tools needed to start developing with JavaScript on Node, with an emphasis on the importance of static code analysis and maintaining a consistent coding standard.
