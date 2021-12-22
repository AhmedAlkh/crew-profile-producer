/*
Name
id
email
getName()
getId()
getEmail()

In addition to Employee class's properties and methods, Engineer will also have:

github  - GitHub username

getGitHub() - GitHub link??

getRole() - Overridden to return 'Engineer'
*/

// ADD VALIDATION TO ALL PROMPTS SO THAT USER INPUT IS IN CORRECT FORMAT!
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);

        this.github = github;
    }

    getGitHub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;