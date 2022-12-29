const Employee = require("./Emp");

class Engineer extends Employee {
    constructor(Name, Id, Email, Github) {
        super(Name, Id, Email);
        this.Github = Github;
    }

    getName() { return this.Name; }

    getId() { return this.Id; }

    getEmail() { return this.Email; }

    getGithub() { return this.Github; }

    getRole() { return this.Engineer; }
}
module.exports = Engineer;