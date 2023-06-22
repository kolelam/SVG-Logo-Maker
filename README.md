# SVG Logo Generator


## Description

This code provides a logo SVG generator that allows you to create a customized logo with different shapes, text, and colors. The program utilizes the Inquirer package to prompt the user for input and generates an SVG file based on the provided information.

## Installation

Before using the project, ensure you have node.js and the following packages installed:
- [Inquirer](https://www.npmjs.com/package/inquirer "npmjs.com")
- [Jest](https://jestjs.io "jestjs.io")

## Getting started

To generate a logo SVG, follow these steps:

1. Ensure you have the required packages installed.

2. Create a file in your project directory and copy the code into it.

3. Open a terminal window and navigate to the project directory.

4. Run the script by executing the following command:

```
node index.js
```

5. The script will prompt you to provide the following information:

* Text for your logo (must be 3 characters or less)
* Text color for your logo
* Shape for your logo (choose from circle, triangle, or square)
* Shape color for your logo

6. After providing the necessary information, the script will generate an SVG file named *logo.svg* in the *examples* directory.

> Note: You can modify the output file name and directory by changing the writeToFile function parameters.

7. Check the specified output directory for the generated SVG file.

That's it! You have successfully generated a customized logo SVG using the provided code.

**For a video walkthrough click [here](https://drive.google.com/file/d/1Gz8HyC6aXi6rUfuaQKOXPsQ_BLIjUwiH/view "drive.google.com")**

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This project is under the MIT License

## Tests

To run the shape tests, follow these steps:

1. Ensure you have Jest installed globally or as a dev dependency.

2. Open a terminal window and navigate to the project directory.

3. Run the tests by executing the following command:
```
 npm test
```

4. Jest will execute the tests and display the results in the terminal.
 * If all tests pass, you will see a success message for each test.
 * If any test fails, Jest will provide details about the failure.



## Questions 

For any questions, please contact me:

Github: [kolelam](https://github.com/kolelam)

Email: kolelamied1@gmail.com