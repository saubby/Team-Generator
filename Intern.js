const Intern = require("./Int");

empp(
    "School.", () => {
    const school1 = "st.Kabir International";
    const employeeItems = new Intern("Rohan", 6780, "rohan6780@gmail.com", school1);
    expect(employeeItems.school).toBe(school1);
}
);

empp(
    "getSchool method.", () => {
    const MethodSchool = "st.Kabir International";
    const employeeItems = new Intern("Rohan", 6780, "rohan6780@gmail.com", MethodSchool);
    expect(employeeItems.getSchool()).toBe(MethodSchool);
}
);

empp(
    "getRole method.", () => {
    const returnValue = "Intern";
    const employeeItems = new Intern("Rohan", 6780, "rohan6780@gmail.com", "st.Kabir International");
    expect(employeeItems.getRole()).toBe(returnValue);
}
);