//packages
const inquirer = require(`inquirer`);
const fs = require(`fs`);

//shapely shapes
const { square, triangle, circle } = require(`./lib/shapes.js`);

// function using the fs module from the npm to use inquirer answers to make the logo
function writeToFile(fileName, answers) {
    let svgString = "";
    svgString = `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">`;
    // g tag applies styling to children
    svgString += "<g>";
    svgString += `${answers.shape}`;

    let shapeInput;
    if (answers.shape === "square") {
        shapeInput = new square();
        svgString += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeColor}"/>`;
    } else if (answers.shape === "triangle") {
        shapeInput = new triangle();
        svgString += `<polygon points="150, 40 73, 200 227,200" fill="${answers.shapeColor}"/>`;
    } else if (answers.shape === "circle") {
        shapeInput = new circle();
        svgString += `<circle cx="150" cy="150" r="80" fill="${answers.shapeColor}"/>`;
    }

    svgString += `<text x="150" y="130" text-anchor="middle" font-size="30" fill="${answers.textColor}">${answers.text}</text>`;
    svgString += "</g>";
    svgString += "</svg>";

    fs.writeFile(fileName, svgString, (err) => {
        err ? console.log(err) : console.log(`Nice! Logo created!`);
    });
}

function promptUser() {
    inquirer.prompt([
        {
            type: `input`,
            name: `text`,
            message: `Enter text to be displayed on logo (up to 3 characters long)`,
        },
        {
            type: `input`,
            name: `textColor`,
            message: `Select a color for the text`,
        },
        {
            type: `list`,
            name: `shape`,
            message: `Select a shape for the logo`,
            choices: [`square`, `triangle`, `circle`],
        },
        {
            type: `input`,
            name: `shapeColor`,
            message: `Select a color for the shape`,
        },
    ])
        .then((answers) => {
            // error for text input as it needs to be 3 characters or less for logo as per the readme
            if (answers.text.length > 3) {
                console.log(`Error: Text must be 3 characters or less`);
                return;
            }
            else {
                writeToFile(`logo.svg`, answers);
            }
        });
}
// call function to prompt user for input
promptUser();