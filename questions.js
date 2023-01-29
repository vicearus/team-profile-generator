// Prompts for creating manager employee
const managerQuestions = [
    {
        type: "input",
        message: "What is the manager's name?",
        name: "managerName"
    },
    {
        type: "input",
        message: "What is the manager's employee ID?",
        name: "managerID"
    },
    {
        type: "input",
        message: "What is the manager's email address?",
        name: "managerEmail"
    },
    {
        type: "input",
        message: "What is the manager's office number?",
        name: "managerOffice"
    },
]

// Prompts for creating engineer employee
const engineerQuestions = [
    {
        type: "input",
        message: "What is the engineer's name?",
        name: "engineerName"
    },
    {
        type: "input",
        message: "What is the engineer's employee ID?",
        name: "engineerID"
    },
    {
        type: "input",
        message: "What is the engineer's email address?",
        name: "engineerEmail"
    },
    {
        type: "input",
        message: "What is the engineer's GitHub username?",
        name: "engineerGitHub"
    },
]

// Prompts for creating intern employee
const internQuestions = [
    {
        type: "input",
        message: "What is the intern's name?",
        name: "internName"
    },
    {
        type: "input",
        message: "What is the intern's employee ID?",
        name: "internID"
    },
    {
        type: "input",
        message: "What is the intern's email address?",
        name: "internEmail"
    },
    {
        type: "input",
        message: "What is the intern's school name?",
        name: "internSchool"
    },
]

// Prompt for deciding whether to add engineers or interns to team
const addMember = [
    {
        type: "list",
        message: "What team members would you like to add?",
        name: "teamMember",
        choices: ["Engineer", "Intern", "I'm done"]
    }
]

module.exports = {
    managerQuestions,
    engineerQuestions,
    internQuestions,
    addMember
}