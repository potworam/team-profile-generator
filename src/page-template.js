//page with all cards go here
const Employee = require('../lib/Employee.js');

const generateTemplate = team => {

    const handleEmployees = {
        Manager: data => {
            const manager = new Employee(data);
            return `
            <div class="card employee-card">
            <div class="card-header">
                <h2 class="card-title">${Manager.getName()}</h2>
                <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${manager.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                    <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
                </ul>
            </div>
        </div>
        `;
        },
        Engineer: data => {
            const Engineer = new Employee(data);
            return `
            <div class="card employee-card">
            <div class="card-header">
                <h2 class="card-title">${Engineer.getName()}</h2>
                <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${Engineer.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${Engineer.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${Engineer.getEmail()}">${Engineer.getEmail()}</a></li>
                    <li class="list-group-item">Github: <a href="https://github.com/${Engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
                </ul>
            </div>
        </div>
        `;
        },
        Intern: data => {
            const Intern = new Employee(data);
            return `
            <div class="card employee-card">
            <div class="card-header">
                <h2 class="card-title">${Intern.getName()}</h2>
                <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${Intern.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${Intern.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${Intern.getEmail()}">${Intern.getEmail()}</a></li>
                    <li class="list-group-item">School: ${Intern.getSchool()}</li>
                </ul>
            </div>
        </div>
        `;
        }
    };
    return team.reduce((template, employee) => template + handleEmployees[employee.role](employee), '')
}
module.exports = { generateTemplate }