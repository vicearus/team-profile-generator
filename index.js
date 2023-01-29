const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const questions = require("./questions");
const fs = require("fs");

const generateHTML = () => {
    fs.writeFile("./dist/index.html",
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
            </style>
        
        </head>
        
        <body>
            <div>
                <h1>My Team</h1>
                <div class="stack-flex" alt="flex for employees">
                    <h2>Manager</h2>
                    <div class="main-card side-flex  " alt="flex for manager">
                        <div class="spaced stack-flex card">
                            <h3>Name</h3>
                            <p>stuff</p>
                            <p>stuff</p>
                            <p>stuff</p>
                        </div>
                        <div class="spaced stack-flex card">
                            <h3>Name</h3>
                            <p>stuff</p>
                            <p>stuff</p>
                            <p>stuff</p>
                        </div>
                        <div class="spaced stack-flex card">
                            <h3>Name</h3>
                            <p>stuff</p>
                            <p>stuff</p>
                            <p>stuff</p>
                        </div>
        
                    </div>
                    <h2>Engineers</h2>
        
                    <div class="main-card side-flex" alt="flex for engineer">
                        <div class="spaced stack-flex card">
                            <h3>Name</h3>
                            <p>stuff</p>
                            <p>stuff</p>
                            <p>stuff</p>
                        </div>
                        <div class="spaced stack-flex card">
                            <h3>Name</h3>
                            <p>stuff</p>
                            <p>stuff</p>
                            <p>stuff</p>
                        </div>
                        <div class="spaced stack-flex card">
                            <h3>Name</h3>
                            <p>stuff</p>
                            <p>stuff</p>
                            <p>stuff</p>
                        </div>
                    </div>
                    <h2>Interns</h2>
        
                    <div class="main-card side-flex" alt="flex for intern">
                        <div class="spaced stack-flex card">
                            <h3>Name</h3>
                            <p>stuff</p>
                            <p>stuff</p>
                            <p>stuff</p>
                        </div>
                    </div>
                </div>
            </div>
            <script src="./script.js"></script>
        </body>
        </html>
    `,
        (error) => error ? console.error(error) : console.log("HTML file generated!"))
}