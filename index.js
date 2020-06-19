//array of questions for user
var inquirer = require("inquirer");
var fs = require('fs');

const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the Title of the project?"
    },
    {
        type: "input",
        name: "description",
        message: "Write a short description of project", 
    },
    {
        type: "input",
        name: "Table of Contents",
        message: "Write a Table of Contents separated by commas for neat order", 
    },
    {
        type: "input",
        name: "Installation",
        message: "Installation instructions", 
    },    {
        type: "input",
        name: "Usage",
        message: "Describe the usage of project", 
    },    {
        type: "checkbox",
        name: "License",
        message: "What license would you like to use?",
        choices: [
            "BSD",
            "MIT",
            "GPL"
        ] 
    },    {
        type: "input",
        name: "Contributing",
        message: "Who will be contributing to this project?", 
    },    {
        type: "input",
        name: "Tests",
        message: "Run tests here for project", 
    },    {
        type: "input",
        name: "Questions",
        message: "What is the email used?", 
    },
];
console.clear();

inquirer
    .prompt(questions).then(response => {
    
        fs.appendFileSync("README.md", ("# " + response.title) + '\n', function(err) {
            if (err) {
                return console.log(err);
            }
            console.log("Title Successful");
        });

        fs.appendFileSync("README.md", ("#Description" + '\n' + response.description) + '\n', function (err) {
            if (err) {
                return console.log(err)
            }
            console.log("Description Successful");
        });

        fs.appendFileSync("README.md", ("## Table of Contents" + '\n' + '-' + response.toc.split(", ").join('\n' + '- ')) + '\n', function(err){
            if (err){
                return console.log(err)
            }
            console.log("Table of Contents Successful");
        });

        fs.appendFileSync("README.md", ("## Installation" + '\n' + response.installation) + '\n', function (err) {
            if (err) {
                return console.log(err)
            }
            console.log("Installation Successful");
        }); 

         fs.appendFileSync("README.md", ("## Usage" + '\n' + response.usage) + '\n', function (err) {
            if (err) {
                return console.log(err)
            }
            console.log("Usage Successful");
        });

        fs.appendFileSync("README.md", ("## License" + '\n' + response.license) + '\n', function (err) {
            if (err) {
                return console.log(err)
            }
            console.log("License Successful");
        });
        
        fs.appendFileSync("README.md", ("## Contribution" + '\n' + response.contributing) + '\n', function (err) {
            if (err) {
                return console.log(err)
            }
            console.log("Contribution Successful");
        });
        fs.appendFileSync("README.md", ("## Tests" + '\n' + response.tests) + '\n', function (err) {
            if (err) {
                return console.log(err)
            }
            console.log("Tests Successful");
        });
        fs.appendFileSync("README.md", ("## Questions" + '\n' + response.questions) + '\n', function (err) {
            if (err) {
                return console.log(err)
            }
            console.log("Questions Successful");
        });
    });
// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
