const Employee = require("./Emp");

class Manager extends Employee {
    constructor(Name, Id, Email, Officenumber) {
        super(Name, Id, Email);
        this.Officenumber = Officenumber;
    }

    getName() { return this.Name; }

    getId() { return this.Id; }

    getEmail() { return this.Email; }

    getOfficenumber() { return this.Officenumber; }

    getRole() { return this.Manager; }
}

module.exports = Manager;