const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template.js');
const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

const questions=[
    {
        type: 'input',
        message: 'Enter your name',
        name: 'name',
    },
    {
        type: 'input',
        message: 'Enter your ID',
        name: 'identification',
    },
    {
        type: 'input',
        message: 'Enter your Email',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Enter your office number',
        name: 'officeNumber',
    },
    {
        type: 'input',
        message: 'Enter your github',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Enter your school',
        name: 'school',
    },
    {
        type:'list',
        name: 'role',
        message: 'What is your role',
        choices: [ 'Manager', 'Engineer', 'Intern']
    },
    //need to add function to add others and loop questions
]
 //need to add function to add page template or assign inquirer variables to the right place
async function init(questions) {
    let answers = await inquirer.prompt(questions)
    console.log(answers)
    await writeToFile("./index.html",answers)
   return answers

}
async function app() {
    await init(questions);
}
app();