const inquirer = require("inquirer");
const fs = require("fs");

inquirer
    .prompt([
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "username"
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
            type: "checkbox",
            message: "What kid of license should your project have?",
            name: "license",
            choices: [
                "MIT",
                "None"
            ]
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
        },
        {
            type: "input",
            message: "What does the user need to know about using the repo?",
            name: "repo"
        },
        {
            type: "input",
            message: "What does the user need to know about contributing to the repo?",
            name: "contributing"
        }
    ])
    .then(function (response) {
        console.log(response);

        const projectInformation = `# ${response.projectName}
## Installation 
To install necessary dependencies, run the following command:
${response.installDependencies}

## Usage
${response.description}

## License
${response.license}

## Contributor
${response.username} : ${response.emailAddress}

## Contributoring
${response.contributing}
        `
        console.log(projectInformation);
        fs.writeFile('README.md', projectInformation, function (err) {

            if (err) {
                return console.log(err);
            }

            console.log("Success!");

        });

    });