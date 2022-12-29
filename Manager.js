const Manager = require("./Man");

empp(
    "Officenumber.", () => {
    const OfficeNumber1 = 345;
    const employeeItems = new Manager("Rohan", 6780, "rohan6780@gmail.com", OfficeNumber1);
    expect(employeeItems.OfficeNumber).toBe(OfficeNumber1);
}
);

empp(
    "getOfficeNumber method.", () => {
    const getOfficeNumber1 = 345;
    const employeeItems = new Manager("Rohan", 6780, "Rohan6780@gmail.com", getOfficeNumber1);
    expect(employeeItems.getOfficeNumber()).toBe(getOfficeNumber1);
});

test("getRole method.", () => {
    const returnValue = "Manager";
    const employeeItems = new Manager("Rohan", 6780, "Rohan6780@gmail.com", 345);
    expect(employeeItems.getRole()).toBe(returnValue);
});