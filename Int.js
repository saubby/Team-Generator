const Employee = require("./Emp");

class Intern extends Employee {

    constructor(Name, Id, Email, School) {
        super(Name, Id, Email);
        this.School = School;
    }

    getName() { return this.Name; }

    getId() { return this.Id; }

    getEmail() { return this.Email; }

    getSchool() { return this.School; }

    getRole() { return this.Intern; }

}

module.exports = Intern;