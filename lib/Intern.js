/*
Name
id
email
getName()
getId()
getEmail()

In addition to Employee class's properties and methods, Intern will also have:

school

getSchool()

getRole() - Overridden to return 'Intern'
*/

// ADD VALIDATION TO ALL PROMPTS SO THAT USER INPUT IS IN CORRECT FORMAT!
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name,id,email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }
}

module.exports = Intern;