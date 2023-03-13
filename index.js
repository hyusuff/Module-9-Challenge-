// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// Array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the name of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Give a brief description of your project?",
  },
  {
    type: "input",
    name: "installation",
    message: "What dependancies did you install for this project?",
  },
  {
    type: "input",
    name: "usage",
    message:
      "How would a user go about getting this on there pc and starting it?",
  },
  {
    type: "input",
    name: "credits",
    message: "Who contributed to this project?",
  },
  {
    type: "list",
    name: "license",
    message: "What is the license is needed for your project?",
    choices: ["MIT", "Apache", "BSD 3-Clause", "None"],
  },
  {
    type: "input",
    name: "tests",
    message: "How did you test your application?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?",
  },
];

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    // if err => console.log(err) else => console.log("README.md Created!")
    err ? console.log(err) : console.log("README.md Created!");
  });
}

// Function to initialize app
function init() {
  inquirer.prompt(questions).then(function (data) {
    writeToFile("README.md", generateMarkdown(data));
  });
}

// Function call to initialize app
init();
