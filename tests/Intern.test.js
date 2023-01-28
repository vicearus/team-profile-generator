describe("Intern", () => {
    it("Tests if Intern name property returns name value", () => {
        const name = "John Doe";
        const testObj = new Intern(name);
        expect(testObj.name).toBe(name);
    })

    it("Tests if Intern id property returns id value", () => {
        const id = 123;
        const testObj = new Intern("John Doe", id);
        expect(testObj.id).toBe(id);
    })

    it("Tests if Intern email property returns email value", () => {
        const email = "JohnDoe@gmail.com";
        const testObj = new Intern("John Doe", 123, email);
        expect(testObj.email).toBe(email);
    })

    it("Tests if Intern office number property returns officeNumber value", () => {
        const school = "A School";
        const testObj = new Intern("John Doe", 123, "JohnDoe@gmail.com", school);
        expect(testObj.school).toBe(school);
    })
    
    it("Tests if Intern getSchool method returns Intern's school", () => {
        const testObj = new Intern("John Doe", 123, "JohnDoe@gmail.com", "A School");
        expect(testObj.getSchool()).toBe("A School");
    })
    
    it("Tests if Intern getRole method returns 'Intern'", () => {
        const testObj = new Intern("John Doe", 123, "JohnDoe@gmail.com", "A School");
        expect(testObj.getRole()).toBe("Intern");
    })
})