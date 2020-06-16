const axios = require("axios");
const util = require("util");
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt(questions);
};

async function init() {
    console.log("Welcome to this ReadMe Generator!");

    try {
        const answers = await promptUser();

        let github = await axios.get(`https://api.github.com/users/${answers.username}`)

        const md = generateMarkdown(answers, github.data);

        await writeFileAsync("README.md", md);

        console.log("You've created a new README file!");

    } catch (err) {
        console.log(err);

    }
};

const questions = [
    // created title reference
    {
        message: "Input your GitHub username",
        name: "username"
    },
    {
        message: "What is the Title of your repo?",
        name: "title"
    },

    {
        message: "Provide a description of your project",
        name: "description"
    },

    {
        message: "How is this Applicatioin Installed?",
        name: "installation"
    },
    {
        message: "Please select a License?",
        name: "license",
        type: "list",
        choices: ["mit", "gpl", "apache-2.0", "mpl-2.0", "other", "none"]
    },
    {
        message: "Any Additional Contributors to this project",
        name: "contributors"
    },
    {
        message: "What is your Email",
        name: "email"
    },

];





init();







