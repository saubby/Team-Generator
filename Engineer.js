const Engineer = require("./Eng");

empp(
    "Github.", () => {
    const github1 = "RohanMotiwala";
    const employeeItems = new Engineer("Rohan", 6780, "rohan6780@gmail.com", github1);
    expect(employeeItems.Github).toBe(github1);
}
);

empp(
    "getGithub method.", () => {
    const getGithub1 = "RohanMotiwala";
    const employeeItems = new Engineer("Rohan", 6780, "rohan6780@gmail.com", getGithub1);
    expect(employeeItems.getGithub()).toBe(getGithub1);
});

empp("getRole method.", () => {
    const returnValue = "Engineer";
    const employeeItems = new Engineer("Rohan", 6780, "Rohan6780@gmail.com", "RohanMotiwala");
    expect(employeeItems.getRole()).toBe(returnValue);
});