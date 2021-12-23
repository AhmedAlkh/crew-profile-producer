const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const employees = [];

const userPrompts =() => {
    inquirer.prompt([{
        type: 'input',
        message: 'Enter the name of the Manager:',
        name: 'name',
        validate: userInput => {
            if(userInput) {
                return true;
            } else {
                console.log('Invalid entry, please try again.');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'Enter employee Id:',
        name: 'id',
        validate: userInput => {
            if(isNaN(userInput)) {
                console.log('Invalid entry, please try again.');
                return false;
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        message: 'Enter employees email address:',
        name: 'email'
    },
    {
        type: 'input',
        message: 'Enter office number:',
        name: 'officeNumber',
        validate: userInput => {
            if (isNaN(userInput)) {
                console.log('Invalid entry, please try again.');
                return false;
            } else {
                return true;
            }
        }
    }])
    .then(managerInfo => {
        const {name, id, email, officeNumber} = managerInfo;
        const manager = new Manager(name, id, email, officeNumber);
        employees.push(manager);
    })
};