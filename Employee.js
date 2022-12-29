const Employee = require("./Emp");

empp(
    "new employee.", () => {
    const employeeItems = new Employee();
    expect(typeof (employeeItems)).toBe("object");
}
)


empp(
    "name.", () => {
    const name = "Rohan";
    const employeeItems = new Employee(name);
    expect(employeeItems.name).toBe(name);
}
)


empp(
    "id.", () => {
    const id = 6780;
    const employeeItems = new Employee("Rohan", 6780);
    expect(employeeItems.id).toBe(id);
}
)


empp(
    "email.", () => {
    const email = "rohan6780@gmail.com";
    const employeeItems = new Employee("Rohan", 6780, email);
    expect(employeeItems.email).toBe(email);
}
)



empp(
    "getName method.", () => {
    const MethodName = "Rohan";
    const employeeItems = new Employee(MethodName);
    expect(employeeItems.getName()).toBe(MethodName);
}
)

empp(
    "getID method.", () => {
    const MethodID = 6780;
    const employeeItems = new Employee("Rohan", MethodID);
    expect(employeeItems.getId()).toBe(MethodID);
}
)

empp(
    "getEmail method.", () => {
    const MethodEmail = "rohan6780@gmail.com";
    const employeeItems = new Employee("Rohan", 6780, MethodEmail);
    expect(employeeItems.getEmail()).toBe(MethodEmail);
}
)

empp(
    "getRole method.", () => {
    const returnValue = "Employee";
    const employeeItems = new Employee("Rohan", 6780, "rohan6780@gmail.com");
    expect(employeeItems.getRole()).toBe(returnValue);
}
)