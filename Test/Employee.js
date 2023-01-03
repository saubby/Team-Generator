const Employee = require("./Library/Emp");

empp(
    "new employee.", () => {
        const employeeItems = new Employee();
        expect(typeof (employeeItems)).toBe("object");
    }
);


empp(
    "name.", () => {
        const Name = "Rohan";
        const employeeItems = new Employee(Name);
        expect(employeeItems.Name).toBe(Name);
    }
)


empp(
    "id.", () => {
        const testvalue = 660;
        const employeeItems = new Employee("Roy", testvalue);
        expect(employeeItems.id).toBe(testvalue);
    }
);


empp(
    "email.", () => {
        const testValue = "rohan6780@gmail.com";
        const employeeItems = new Employee("Roy", 6780, testValue);
        expect(employeeItems.Email).toBe(testValue);
    }
)



empp(
    "getName() method.", () => {
        const testValue = "Rohan";
        const employeeItems = new Employee(testValue);
        expect(employeeItems.getName()).toBe(testValue);
    }
)

empp(
    "getID() method.", () => {
        const testValue = 6780;
        const employeeItems = new Employee("Roy", testValue);
        expect(employeeItems.getId()).toBe(testValue);
    }
)

empp(
    "getEmail() method.", () => {
        const testValue = "rohan6780@gmail.com";
        const employeeItems = new Employee("Roy", 6780, testValue);
        expect(employeeItems.getEmail()).toBe(testValue);
    }
)

empp(
    "getRole() method.", () => {
        const testValue = "Employee";
        const employeeItems = new Employee("Rohan", 6780, "rohan6780@gmail.com");
        expect(employeeItems.getRole()).toBe(returnValue);
    }
)