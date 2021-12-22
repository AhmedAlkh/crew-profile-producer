/* 
This CLASS needs the following properties and methods:
Name
id
email
getName()
getId()
getEmail()
getRole() - returns 'Employee'

The other 3 classes will EXTEND this class!
*/

// ADD VALIDATION TO ALL PROMPTS SO THAT USER INPUT IS IN CORRECT FORMAT!

// Create Employee Constructor
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // Return info from user input
    getName() {
        return this.name
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee';
    }
};

// Export Employee constructor
module.exports = Employee