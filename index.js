const inquirer = require('inquirer');
const fs = require('fs');
const {generateTemplate} = require('./src/page-template.js');
const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

const employees = [];

const continueQuestion = [{
    type: 'confirm',
    name: 'continue',
    message: 'Would you like do add another user?',
},]
const generalEmployeeQuestions = [
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
        type: 'list',
        name: 'role',
        message: 'What is your role',
        choices: ['Manager', 'Engineer', 'Intern']
    }
    //need to add function to add others and loop questions
]
console.log(generateTemplate);
//need to add function to add page template or assign inquirer variables to the right place
async function promptEmployeeInfo(addAnother) {
    if (!addAnother) {
        const template = generateTemplate(employees);

        console.log('here is your team template: ', template);
        //  await writeToFile("./index.html",answers)
        return
    }
    const employeeInfo = await inquirer.prompt(generalEmployeeQuestions);
    console.log(employeeInfo)
    employees.push(employeeInfo);
    const { continue: shouldContinue } = await inquirer.prompt(continueQuestion);
    promptEmployeeInfo(shouldContinue);
}
async function app() {
    await promptEmployeeInfo(true);
}
app();