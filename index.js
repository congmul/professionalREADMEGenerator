const inquirer = require("inquirer");
const fs = require("fs");
const license = {
    "MIT" : "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    "ISC" : "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
    "Apache" : "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    "Eclipse" : "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",
    "IBM" : "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)",
    "Perl" : "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)",
    "Mozilla" : "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
    "Zlib" : "[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)",
    "Unlicense" : "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
};
let licenseStr = "";

inquirer
    .prompt([
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "username"
        },
        {
            type: "checkbox",
            message: "What kid of license should your project have?",
            name: "license",
            choices: [
                "MIT",
                "ISC",
                "Apache",
                "Eclipse",
                "IBM",
                "Perl",
                "Mozilla",
                "Zlib",
                "Unlicense"
            ]
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "emailAddress"
        },
        {
            type: "input",
            message: "What is your project's name?",
            name: "projectName"
        },
        {
            type: "input",
            message: "Please write a short description of your project?",
            name: "description"
        }, 
        {
            type: "input",
            message: "Please write a usage of your project?",
            name: "usage"
        }, 
        {
            type: "input",
            message: "What commnad should be run to install dependencies?",
            name: "installDependencies"
        },
        {
            type: "input",
            message: "What commnad should be run to run tests?",
            name: "runTest"
        }
    ])
    .then(function (response) {
        
        response.license.forEach(element => {
            licenseStr += license[element] + " ";
        });

        const projectInformation = `# ${response.projectName}
${licenseStr}

## Table of Contents
1. [Description](#Description)
2. [Usage](#Usage)
3. [Installation](#Installation)
4. [Test](#Test)
5. [Contributoring](#Contributoring)

## Description
${response.description}

## Usage
${response.usage}

## Installation 
To install necessary dependencies, run the following command:
${response.installDependencies}

## Test 
${response.runTest}

## Contributoring
Contact me by email : ${response.emailAddress} <br>
Contact me by gitHub : <a href="https://github.com/${response.username}">${response.username}</a>`;

        console.log(projectInformation);
        fs.writeFile('READMEout.md', projectInformation, function (err) {

            if (err) {
                return console.log(err);
            }

            console.log("Success!");

        });

    });