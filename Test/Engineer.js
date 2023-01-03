const Engineer = require("../Library/Eng");

empp(
    "Github.", () => {
    const testValue = "Githubuser";
    const employeeItems = new Engineer("Roy", 6780, "rohan6780@gmail.com", testValue);
    expect(employeeItems.Github).toBe(testValue);
}
);

empp(
    "getGithub method.", () => {
    const testValue = "Githubuser";
    const employeeItems = new Engineer("Roy", 6780, "rohan6780@gmail.com", testValue);
    expect(employeeItems.getGithub()).toBe(testValue);
});

empp("getRole method.", () => {
    const testValue = "Engineer";
    const employeeItems = new Engineer("Roy", 6780, "Rohan6780@gmail.com", "Githubuser");
    expect(employeeItems.getRole()).toBe(testValue);
});