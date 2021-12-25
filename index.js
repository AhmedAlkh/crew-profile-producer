const generateHTML = require('./src/generateHTML');
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const crewMembers = [];

const userPrompts =() => {
return inquirer.prompt([{
        type: 'input',
        message: 'Enter the name of the Manager:',
        name: 'name',
        validate: userInput => {
            if(userInput) {
                return true;
            } else {
                console.log('Please enter a name.');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: "Enter Manager's Id:",
        name: 'id',
        validate: userInput => {
            if(userInput) {
                return true;
            } else {
                console.log("Please enter the Manager's id number.");
                return false;
            }
        }
    },
    {
        type: 'input',
        message: "Enter Manager's email address:",
        name: 'email',
        validate: userInput => {
            if(userInput) {
                return true;
            } else {
                console.log("Please enter the Manager's email address.");
                return false;
            }
        }
    },
    {
        type: 'input',
        message: "Enter Manager's office number:",
        name: 'officeNumber',
        validate: userInput => {
            if(userInput) {
                return true;
            } else {
                console.log("Please enter the Manager's office number");
                return false;
            }
        }
    }])
    .then(managerInfo => {
        const {name, id, email, officeNumber} = managerInfo;
        const manager = new Manager(name, id, email, officeNumber);
        crewMembers.push(manager);
        console.log(manager);
    })
};

const newEmployee =() => {
    console.log(`
    ==================
     Add an employee
    ==================
    `);
return inquirer.prompt([
    {
        type: 'list',
        name: 'role',
        message: "Select the employees role:(use arrow keys)",
        choices: ['Engineer', 'Intern']
    },
    {
        type: 'input',
        message: 'Enter the name of the employee:',
        name: 'name',
        validate: userInput => {
            if(userInput) {
                return true;
            } else {
                console.log('Please enter a name.');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'Enter employee Id:',
        name: 'id',
        validate: userInput => {
            if(userInput) {
                return true;
            } else {
                console.log('Please enter an id number.');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'Enter employees email address:',
        name: 'email',
        validate: userInput => {
            if(userInput) {
                return true;
            } else {
                console.log('Please enter a valid email address.');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: "Enter the Engineer's GitHub username:",
        name: 'github',
        when:(input) => input.role === 'Engineer',
        validate: (userInput) => {
            if(userInput) {
                return true;
            } else {
                console.log('Enter a valid GitHub username.');
            }
        }
    },
    {
        type: 'input',
        message: 'Which school is the intern from?',
        name: 'school',
        when:(input) => input.role === 'Intern',
        validate: (userInput) => {
            if(userInput) {
                return true;
            } else {
                console.log('Please enter a valid school name.');
            }
        }
    },
    {
        type: 'confirm',
        message: 'Would you like to add another employee?',
        name: 'confirmNewEmployee',
        default: false
    }
])
.then(employeeInfo => {
    let {name,id,email,role,school,github,confirmNewEmployee} = employeeInfo;
    let employee;

    if(role === 'Intern') {
        employee = new Intern (name, id, email, school);
        console.log(employee);
    } else if (role === 'Engineer') {
        employee = new Engineer (name, id, email, github);
        console.log(employee);
    }

    crewMembers.push(employee);

    if(confirmNewEmployee) {
        return newEmployee(crewMembers);
    } else {
        return crewMembers;
    }
})
};

const WriteFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log('Success! Profile has been generated. Please see index.html')
        }
    })
};

userPrompts()
.then(newEmployee)
.then(crewMembers => {
    return generateHTML(crewMembers);
})
.then(webPage => {
    return WriteFile(webPage);
})
.catch(err => {
    console.log(err);
});