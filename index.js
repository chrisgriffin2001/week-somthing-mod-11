const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github username? 🐙'


    },

    {
        type: 'input',
        name: 'email',
        message: 'What is your email address? 📧'

    },
    {
        type: 'input',
        name: 'title',
        message: "What is your projects name?" 
    },

    {
        type: 'input',
        name: 'description',
        message: 'short description of your project?' 
    },
    {
        type: 'input',
        name: 'license',
        message: 'What kind of license',
        choices: ["MIT", "APACHE 2.0", "GPL", "NONE"] 
    },

    {
        type: 'input',
        name: 'installation',
        message: 'What command should be to run and install',
        default: 'npm i'
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command should be to run to test',
        default: 'npm test'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does th euser need to know about using th erepo?',
        
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'what does the user need to know about how to contribute to the repo?',
        
    },



    

];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((responce) => {
        console.log(`Generating README...`);
        writeToFile('READ.md', generateMarkdown({...responce}))
    })

}

// function call to initialize program
init();
