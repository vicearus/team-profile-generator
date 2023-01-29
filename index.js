const inquirer = require("inquirer");
const Engineer = require("./classes/Engineer");
const Intern = require("./classes/Intern");
const Manager = require("./classes/Manager");
const questions = require("./questions");
const fs = require("fs");
const managerQuestions = questions.managerQuestions;
const engineerQuestions = questions.engineerQuestions;
const internQuestions = questions.internQuestions;
const addMember = questions.addMember;
// Array to store employee information
const managerTeam = [];
const engineerTeam = [];
const internTeam = [];

const init = () => {
    askManager();
}

const askManager = () => {
    console.log("Answer the questions below to create your team!");
    inquirer.prompt(managerQuestions)
        .then((response) => {
            const manager = new Manager(
                response.managerName,
                response.managerID,
                response.managerEmail,
                response.managerOffice
            );
            const makeManager = 
                `
                <div class="spaced stack-flex card">
                    <h3>${manager.name}</h3>
                    <p>Employee ID: ${manager.id}</p>
                    <p>Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                    <p>Office Number:${manager.officeNumber}</p>
                </div>
                `
            managerTeam.push(makeManager);
            console.log("-----Manager add to team!-----");
            askAddMember();
        })
}

// Function to prompt adding engineer or intern to team
const askAddMember = () => {
    inquirer.prompt(addMember)
        .then((response) => {
            switch (response.teamMember) {
                case "Manager":
                    askManager();
                    break
                case "Engineer":
                    askEngineer();
                    break
                case "Intern":
                    askIntern();
                    break
                case "I'm done":
                    console.log("Generating HTML file...");
                    generateHTML();
                    break
            }
        })
}

// Function to prompt for engineer employee properties
const askEngineer = () => {
    inquirer.prompt(engineerQuestions)
        .then((response) => {
            const engineer = new Engineer(
                response.engineerName,
                response.engineerID,
                response.engineerEmail,
                response.engineerGitHub
            );
            const makeEngineer =
                `
                <div class="spaced stack-flex card">
                    <h3>${engineer.name}</h3>
                    <p>Employee ID: ${engineer.id}</p>
                    <p>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                    <p>GitHub: <a href="https://github.com/${engineer.gitHub}">${engineer.gitHub}</a></p>
                </div>
                `
            engineerTeam.push(makeEngineer);
            console.log("-----Engineer add to team!-----");
            askAddMember();
        })
}

// Function to prompt for intern employee properties
const askIntern = () => {
    inquirer.prompt(internQuestions)
        .then((response) => {
            const intern = new Intern(
                response.internName,
                response.internID,
                response.internEmail,
                response.internSchool
            );
            const makeIntern =
                `
                    <div class="spaced stack-flex card">
                        <h3>${intern.name}</h3>
                        <p>Employee ID: ${intern.id}</p>
                        <p>Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                        <p>School: ${intern.school}</p>
                    </div>
                `
            internTeam.push(makeIntern);
            console.log("-----Intern add to team!-----");
            askAddMember();
        })
}

const generateHTML = () => {
    fs.writeFile("./gen/index.html",
        `
        <!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>        
            <style>
            .main-card{
                width: 100%;
                border: 4px solid black;
                border-radius: 20px;
                flex-wrap: wrap;
                margin: 1% 0%
            
            }
            .stack-flex {
                display: flex;
                flex-direction: column;
                flex-wrap: wrap;
                flex: 1 1 50%;
            }
            
            /*flex rows side by side */
            .side-flex {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                flex: 1 1 50%;
            }
            
            /* margin and padding default */
            .spaced {
                margin: 2%;
                padding: 0% 3%;
            }
            
            .card {
                border: 1px solid green;
                width: 100%;
            }
            h1 {
                text-align: center;
            }
            </style>
        
        </head>
        
        <body>
            <div>
                <h1>My Team</h1>
                <div class="stack-flex" alt="flex for employees">
                    <h2>Managers</h2>
                        <div class="main-card side-flex  " alt="flex for manager">
                            ${managerTeam.join("")}
                        </div>
                    <h2>Engineers</h2>
                        <div class="main-card side-flex" alt="flex for engineer">
                            ${engineerTeam.join("")}
                        </div>
                    <h2>Interns</h2>
                        <div class="main-card side-flex" alt="flex for intern">
                            ${internTeam.join("")}
                        </div>
                </div>
            </div>
        </body>
        </html>
    `,
        (error) => error ? console.error(error) : console.log("HTML file generated!"))
}

init();