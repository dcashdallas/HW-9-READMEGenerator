const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");



const questions = [
    {
        type: 'input',
        name: 'gitHubName',
        message: 'What is your username on Github?',

    },

    {

        type: 'input',
        name: 'repoName',
        message: 'What is title of this project?',

    },

    {
        type: 'input',
        message: 'Write a description of this application',
        name: 'description',

    },

    {
        type: 'input',
        message: 'Reference how is this application installed',
        name: 'installApp',

    },

    {
        type: 'input',
        message: 'What are the instructions for using this app?',
        name: 'appInstructions',

    },



    {
        type: 'input',
        message: 'What license they would you  like to use? (Ex: MIT, GPL 3.0) If you do not wish to use a license type "none" ',
        name: 'license',

    },

    {
        type: 'input',
        message: 'List all additional contributors to this project (if none write "none") ',
        name: 'contributors',

    },



];

function init() {
    inquirer.prompt(questions).then((response) => {


        fs.appendFileSync("README.md", ("# " + response.repoName) + '\n', function (err) {

            if (err) {
                console.log(err)
            }
            else {
                console.log("Success")
            }
            const md = generateMarkdown(answers, github.data);
        })

        fs.appendFileSync("README.md", ("This application was developed by: " + response.gitHubName + '\n') + '\n', function (err) {

            if (err) {
                console.log(err)
            }
            else {
                console.log("Success")
            }

        })


        fs.appendFileSync("README.md", (response.description) + '\n', function (err) {

            if (err) {
                console.log(err)
            }
            else {
                console.log("Success")
            }

        })

        fs.appendFileSync("README.md", ("## Installation" + '\n' + response.installApp) + '\n', function (err) {

            if (err) {
                console.log(err)
            }
            else {
                console.log("Success")
            }

        })

        fs.appendFileSync("README.md", ("## How to use the Application" + '\n' + response.appInstructions) + '\n', function (err) {

            if (err) {
                console.log(err)
            }
            else {
                console.log("Success")
            }

        })

        fs.appendFileSync("README.md", ("Additional Contributors" + '\n' + response.appIssuesAndCont) + '\n', function (err) {

            if (err) {
                console.log(err)
            }
            else {
                console.log("Success")
            }

        })

        fs.appendFileSync("README.md", ("## Other Contibuting Developers:" + '\n' + response.contributors) + '\n', function (err) {

            if (err) {
                console.log(err)
            }
            else {
                console.log("Success")
            }

        })

        fs.appendFileSync("README.md", ("## Licence(s)" + '\n' + response.license) + '\n', function (err) {

            if (err) {
                console.log(err)
            }
            else {
                console.log("Success")
            }

        })

    })
}


init();




