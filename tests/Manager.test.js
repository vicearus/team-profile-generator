const Employee = require("../classes/Employee");
const Manager = require("../classes/Manager");


describe("Manager", () => {
    it("Tests if Manager name property returns name value", () => {
        const name = "John Doe";
        const testObj = new Manager(name);
        expect(testObj.name).toBe(name);
    })

    it("Tests if Manager id property returns id value", () => {
        const id = 123;
        const testObj = new Manager("John Doe", id);
        expect(testObj.id).toBe(id);
    })

    it("Tests if Manager email property returns email value", () => {
        const email = "JohnDoe@gmail.com";
        const testObj = new Manager("John Doe", 123, email);
        expect(testObj.email).toBe(email);
    })

    it("Tests if Manager office number property returns officeNumber value", () => {
        const officeNumber = 111;
        const testObj = new Manager("John Doe", 123, "JohnDoe@gmail.com", officeNumber);
        expect(testObj.officeNumber).toBe(officeNumber);
    })

    it("Tests if Manager getRole method returns 'Manager'", () => {
        const testObj = new Manager("John Doe", 123, "JohnDoe@gmail.com", 111);
        expect(testObj.getRole()).toBe("Manager");
    })
})