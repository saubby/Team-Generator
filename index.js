var employees = [];
var Manager = require("./Man");
var Engineer = require("./Eng");
var Intern = require("./Int");
var newLocal = require("inquirer");
var inquirer = newLocal;
var fs = require("fs");


function initApp() {
    initiatehtml();
    addmember();
}

function addmember() {

    inquirer.prompt([

        {
            message: "Name of new member",
            name: "Name"
        },

        {
            type: "input",
            message: "Role of new member",
            choices:
                [
                    "Manager",
                    "Engineer",
                    "Intern",
                ],
            name: "role"
        },

        {
            message: "Id of new member",
            name: "Id"
        },

        {
            message: "Email of new member",
            name: "Email"
        }
    ])

        .then(function ({ Name, Id, Email, role }) {

            let roledesc;

            if (role == "Intern") {
                roledesc = "school";
            }
            else if (role == "Engineer") {
                roledesc = "Github";
            }
            else {
                roledesc = "Officenumber";
            }


            inquirer.prompt([

                {
                    message: `${roledesc} of member`,
                    name: "roledesc"
                },

                {
                    type: "input",
                    message: "Type 'yes' if you want to add more members in your team",
                    choices:
                        [
                            "yes",
                            "no"
                        ],
                    name: "moremembers"
                }

            ])


                .then(function ({ roledesc, moremembers }) {
                    let newlyaddedmember;

                    if (role == "Intern") {
                        newlyaddedmember = new Intern(Name, Id, Email, roledesc);
                    }

                    else if (role == "Engineer") {
                        newlyaddedmember = new Engineer(Name, Id, Email, roledesc);
                    }

                    else {
                        newlyaddedmember = new Manager(Name, Id, Email, roledesc);
                    }

                    employees.push(newlyaddedmember);
                    addhtml(newlyaddedmember)

                        .then(function () {
                            if (moremembers == "yes") {
                                addmember();
                            }
                            else {
                                terminatehtml();
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
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>Team Profile</title>
    </head>

    <body>
        <nav class="navbar navbar-dark bg-dark mb-5">
            <span class="navbar-brand mb-0 h1 w-100 text-center">Project Team </span>
        </nav>
        <div class="container">
        <div class="row">`;

    fs.writeFile("./index.html", html, function (er) {
        if (er) {
            console.log(er);
        }
    });

    console.log("initiate");
}

function addhtml(member) {

    return new Promise(function (solved, eliminate) {
        const Name = member.getName();
        const Role = member.getRole();
        const Id = member.getId();
        const Email = member.getEmail();
        let data;

        if (Role == "Intern") {
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

        else if (Role == "Engineer") {
            const Github = member.getGithub();
            data = `<div class="col-6">
                <div class="card mx-auto mb-3" style="width: 18rem">
                <h5 class="card-header">${Name}<br /><br />Engineer</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${Id}</li>
                    <li class="list-group-item">Email Address: ${Email}</li>
                    <li class="list-group-item">GitHub: ${Github}</li>
                </ul>
                </div>
            </div>`;
        }

        else {
            var Officenumber = member.getOfficenumber();
            data = `<div class="col-8">
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

        console.log("add member");
        fs.appendFile("./index.html", data, function (er) {
            if (er) {
                return eliminate(er);
            };
            return solved();
        }
        );
    });

}

function terminatehtml() {
    const html = ` 
    </div>
    </div>
    
</body>
</html>`;

    fs.appendFile("./index.html", html, function (er) {
        if (er) {
            console.log(er);
        };
    });

    console.log("finish");
}

initApp();