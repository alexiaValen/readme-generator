// TODO: Include packages needed for this application
var inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'motivation',
        message: 'What was your motivation?',
    },
    {
        type: 'input',
        name: 'whyReason',
        message: 'Why did you build this project?',
    },
    {
        type: 'input',
        name: 'whatProblem',
        message: 'What problem does it solve?',
    },
    {
        type: 'input',
        name: 'whatLearned',
        message: 'What did you learn?',
    },
    {
        type: 'input',
        name: 'standOut',
        message: 'What makes your project stand out?',
    },
    {
        type: "checkbox",
        name: "languages",
        message: "What languages/technologies were used to create this project?",
        choices: ["HTML", "CSS", "JavaScript", "Node.JS"],
    },
    {
        type: 'input',
        name: 'steps',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
    },
    {
        type: 'input',
        name: 'instructions',
        message: 'Provide instructions and examples for use. Include screenshots as needed.',
    },
    {
        type: 'input',
        name: 'collaborators',
        messages: 'List your collaborators, if any, with links to their GitHub profiles. (If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. If you followed tutorials, include links to those here as well.)',
    },
    {
        type: 'input',
        name: 'license',
        message: 'The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).',
    },
    {
        type: 'input',
        name: 'features',
        message:'If your project has a lot of features, list them here.',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
