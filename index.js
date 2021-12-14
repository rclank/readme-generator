// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        // project title
        type: 'input',
        name: 'title',
        message: 'What is your project title? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a project title!');
                return false;
            }
        }
    },
    {
        // github username
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username? (Required)',
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    },
    {
        // email address
        type: 'input',
        name: 'email',
        message: 'Please enter a good contact email. (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter a good contact email!');
                return false;
            }
        }
    },
    {
        // project description
        type: 'input',
        name: 'description',
        message: 'Please enter a description for your project'
    },
    {
        // installation instructions
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions for your project'
    },
    {
        // usage info
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information for your project'
    },
    {
        // license
        // choose from list of options
        type: 'list',
        name: 'license',
        message: 'Please select a license from the following options:',
        choices: ['MIT', 'Apache', 'None']
    },
    {
        // contributing guidelines
        type: 'input',
        name: 'contributing',
        message: 'Please provide contribution guidelines for your project'
    },
    {
        // tests
        type: 'input',
        name: 'tests',
        message: 'Please provide testing instructions for your project'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile(fileName, data, err => {
        if (err) {
            console.log("that didn't work");
            return;
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions);
}

// Function call to initialize app
// start by getting user input in cli via inquirer
init()
    .then(answers => console.log(answers));
    // pass user input to generate markdown
        // return constructed markdown as one giant string
    // pass giant markdown string as input to write to a file
        // use fs.writeFile() to write a file with full markdown we just generated
        // return success message upon success
    // catch any errors in above promise chain
        // log errors caught

    // .then(answers => writeToFile('README.md', generateMarkdown(answers)));

    // https://img.shields.io/badge/<LABEL>-<MESSAGE>-<COLOR>
