/* 
Name
id
email
getName()
getId()
getEmail()

In addition to the Employee class's properties and methods, this Manager class will also have:

officeNumber
getRole() - Overridden to return 'Manager'
*/

// ADD VALIDATION TO ALL PROMPTS SO THAT USER INPUT IS IN CORRECT FORMAT!
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;