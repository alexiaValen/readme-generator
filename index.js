// TODO: Include packages needed for this application
var inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
var fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is your description?',
    },
    {
        type: 'input',
        name: 'motivation',
        message: 'What was your motivation?',
    },
    {
        type: 'input',
        name: 'why',
        message: 'Why did you build this project?',
    },
    {
        type: 'input',
        name: 'problem',
        message: 'What problem does it solve?',
    },
    {
        type: 'input',
        name: 'learned',
        message: 'What did you learn?',
    },
    {
        type: "checkbox",
        name: "languages",
        message: "What languages/technologies were used to create this project?",
        choices: ["HTML", "CSS", "JavaScript", "Node.JS"],
    },
    {
        type: 'input',
        name: 'instructions',
        message: 'Provide instructions and examples for use. Include screenshots as needed.',
    },
    {
        type: 'input',
        name: 'collaborators',
        messages: 'List your collaborators, if any, with links to their GitHub profiles.',
    },
    {
        type: 'input',
        name: 'credits',
        message:'List your collaborators, if any, with links to their GitHub profiles. If you followed tutorials, include links to those here as well.',
    },
    {
        type: 'list',
        message: 'Choose your license for your project.',
        name: 'license',
        choices: [
            { value: 'Apache' },   
            { value: 'BSD3' },  
            { value: 'LGPL' },  
            { value: 'MIT' },  
            { value: 'MPL' }, 
            { value: 'None' }, 
        ]
      },
    {
        type: 'input',
        name: 'features',
        message:'If your project has a lot of features, list them here.',
    },
    {
        type: 'input',
        message: 'Where is this application deployed at?',
        name: 'deploy',
    },
];



// TODO: Create a function to write README file
function writeToFile(fileName, data)  {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('success'));
}

// TODO: Create a function to initialize app
const init = async () => {
    try {
        const data = await inquirer.prompt(questions);
        writeToFile('./generatedREADME.md', generateMarkdown(data));
    } catch (err) {
        console.log(err);
    }
}

// Function call to initialize app
init();

//exports
module.exports = questions;