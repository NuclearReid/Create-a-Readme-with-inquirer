const inquirer = require('inquirer');
const getMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
const { title, cpuUsage } = require('process');

// My array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the Title of the project? ',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Give a brief description of what this project does and who it is for:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What command is needed to install the required dependenceies?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Usage instructions:',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Which Licnese would you like to use?',
        name: 'license',
        choices: ['Apache License 2.0','GNU General Public License v3.0', 'MIT license', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'None'],
    },
    {
        type: 'input',
        message: 'Who else helped?',
        name: 'credit',
        default: 'n/a',
    },
    {
        type: 'input',
        message: 'How can people Contribute?',
        name: 'contribute',
        default: 'n/a',
    },
    {
        type: 'input',
        message: 'Instructions and code for running tests:',
        name: 'tests',
        default: 'n/a',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'gitHub',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },

]
       
// creates the readme file using the user's input
function writeToFile(filename, markdown) {
    fs.writeFile(filename, markdown, (err) =>
        err ? console.error(err):console.log('Created!')
    );

}
// starts the program by using inquirer to prompt the user with the questions array
function init() {
    inquirer.prompt(questions)
    .then((data)=> {
        const markdown = getMarkdown(data);
        writeToFile('README.md', markdown);
        })
        .catch((error) => console.error(error));
}

init();



