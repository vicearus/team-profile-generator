const Employee = require("../classes/Employee");

describe("Employee", () => {
    it("Tests if Employee name property returns name value", () => {
        const name = "John Doe";
        const testObj = new Employee(name);
        expect(testObj.name).toBe(name);
    })
    
    it("Tests if Employee id property returns id value", () => {
        const id = 123;
        const testObj = new Employee("John Doe", id);
        expect(testObj.id).toBe(id);
    })
    
    it("Tests if Employee email property returns email value", () => {
        const email = "JohnDoe@gmail.com";
        const testObj = new Employee("John Doe", 123, email);
        expect(testObj.email).toBe(email);
    })

    it("Tests if Employee getName method returns Employee's name", () => {
        const testObj = new Employee("John Doe", 123, "JohnDoe@gmail.com");
        expect(testObj.getName()).toBe("John Doe");
    })

    it("Tests if Employee getID method returns Employee's ID", () => {
        const testObj = new Employee("John Doe", 123, "JohnDoe@gmail.com");
        expect(testObj.getID()).toBe(123);
    })

    it("Tests if Employee getEmail method returns Employee's email", () => {
        const testObj = new Employee("John Doe", 123, "JohnDoe@gmail.com");
        expect(testObj.getEmail()).toBe("JohnDoe@gmail.com");
    })

    it("Tests if Employee getRole method return's 'Employee'", () => {
        const testObj = new Employee("John Doe", 123, "JohnDoe@gmail.com");
        expect(testObj.getRole()).toBe("Employee");
    })
})