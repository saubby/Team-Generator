const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./Library/Eng");
const Intern = require("./Library/Int");
const Manager = require("./Library/Man");

const employees = [];
function startApp() {
    initiatehtml();
    addupmember();
}

function addupmember() {
    inquirer.prompt([{

        message: "Name of new member",
        name: "Name"
    },

    {
        type: "list",
        message: "Role of new team member",
        choices: [
            "Engineer",
            "Intern",
            "Manager"
        ],
        name: "Role"
    },
    {
        message: "Id of new team member",
        name: "Id"
    },

    {
        message: "Email address of new team member",
        name: "Email"
    }

    ])
        .then(function ({ Name, Role, Id, Email }) {

            let roledesc = "";

            if (Role === "Engineer") {
                roledesc = "GitHub username";
            }

            else if (Role === "Intern") {
                roledesc = "school name";
            }

            else {
                roledesc = "office number";
            }

            inquirer.prompt([{
                message: `Enter team member's ${roledesc}`,
                name: "roledesc"
            },
            {
                type: "list",
                message: "Would you like to add more team members?",
                choices: [
                    "yes", "No"
                ],
                name: "moremembers"
            }
            ]).then(function ({ roledesc, moremembers }) {
                let newMember;

                if (Role === "Engineer") {
                    newMember = new Engineer(Name, Id, Email, roledesc);
                }


                else if (Role === "Intern") {
                    newMember = new Intern(Name, Id, Email, roledesc);
                }

                else {
                    newMember = new Manager(Name, Id, Email, roledesc);
                }
                employees.push(newMember);
                addHtml(newMember).then(function () {

                    if (moremembers === "yes") {
                        addupmember();
                    }
                    else {
                        finishHtml();
                    }
                });
            });
        });
}

function initiatehtml() {
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>Team Description</title>
    </head>
    <body>
        <nav class="navbar navbar-dark bg-dark mb-5">
            <span class="navbar-brand mb-0 h1 w-100 text-center">Team Profile</span>
        </nav>
        <div class="container">
            <div class="row">`;
    fs.writeFile("./dist/index.html", html, function (err) {
        if (err) {
            console.log(err);
        }
    });
    console.log("Initialize");
}

function addHtml(member) {
    return new Promise(function (resolve, reject) {
        const Name = member.getName();
        const Role = member.getRole();
        const Id = member.getId();
        const Email = member.getEmail();
        let data = "";


        if (Role === "Engineer") {
            const GitHub = member.getGithub();
            data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${Name}<br /><br />Engineer</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${Id}</li>
                <li class="list-group-item">Email Address: ${Email}</li>
                <li class="list-group-item">GitHub: ${GitHub}</li>
            </ul>
            </div>
        </div>`;
        }

        else if (Role === "Intern") {
            const School = member.getSchool();
            data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${Name}<br /><br />Intern</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${Id}</li>
                <li class="list-group-item">Email Address: ${Email}</li>
                <li class="list-group-item">School: ${School}</li>
            </ul>
            </div>
        </div>`;
        }

        else {
            const Officenumber = member.getOfficenumber();
            data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${Name}<br /><br />Manager</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${Id}</li>
                <li class="list-group-item">Email Address: ${Email}</li>
                <li class="list-group-item">Office Phone: ${Officenumber}</li>
            </ul>
            </div>
        </div>`
        }
        console.log("adding team member");
        fs.appendFile("./dist/index.html", data, function (err) {
            if (err) {
                return reject(err);
            };
            return resolve();
        });
    });
}

function finishHtml() {
    const html = ` </div>
    </div>
    </body>
    </html>`;

    fs.appendFile("./dist/index.html", html, function (err) {
        if (err) {
            console.log(err);
        };
    });
    console.log("finish");
}
startApp();