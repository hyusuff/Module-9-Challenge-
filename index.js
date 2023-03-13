// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
