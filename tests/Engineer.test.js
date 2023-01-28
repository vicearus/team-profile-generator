describe("Engineer", () => {
    it("Tests if Engineer name property returns name value", () => {
        const name = "John Doe";
        const testObj = new Engineer(name);
        expect(testObj.name).toBe(name);
    })

    it("Tests if Engineer id property returns id value", () => {
        const id = 123;
        const testObj = new Engineer("John Doe", id);
        expect(testObj.id).toBe(id);
    })

    it("Tests if Engineer email property returns email value", () => {
        const email = "JohnDoe@gmail.com";
        const testObj = new Engineer("John Doe", 123, email);
        expect(testObj.email).toBe(email);
    })

    it("Tests if Engineer office number property returns officeNumber value", () => {
        const gitHub = "JohnDoe";
        const testObj = new Engineer("John Doe", 123, "JohnDoe@gmail.com", gitHub);
        expect(testObj.gitHub).toBe(gitHub);
    })
    
    it("Tests if Engineer getGitHub method returns Engineer's GitHub username", () => {
        const testObj = new Engineer("John Doe", 123, "JohnDoe@gmail.com", "JohnDoe");
        expect(testObj.getGitHub()).toBe("JohnDoe");
    })
    
    it("Tests if Engineer getRole method returns 'Engineer'", () => {
        const testObj = new Engineer("John Doe", 123, "JohnDoe@gmail.com", "JohnDoe");
        expect(testObj.getRole()).toBe("Engineer");
    })
})