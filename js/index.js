// TODO: Include packages needed for this application
import fs from "fs";
import inquirer from "inquirer";
import generateMarkdown from "./generateMarkdown.js";
console.log(generateMarkdown);
// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      type: "input",
      message: "What is your project's deployed URL?",
      name: "link",
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
    },
    {
      type: "input",
      message: "What is your Github username?",
      name: "username",
    },
    {
      type: "input",
      message: "What is your project's Github repository URL?",
      name: "repo",
    },
    {
      type: "input",
      message: "What is your project's title?",
      name: "title",
    },
    {
      type: "input",
      message: "Describe your project.",
      name: "description",
    },
    {
      type: "input",
      message: "Please enter installation instructions.",
      name: "instInstructions",
    },
    {
      type: "input",
      message: "Provide usage instructions.",
      name: "usage",
    },
    {
      type: "input",
      message: "List contributors.",
      name: "contributors",
    },
    {
      type: "input",
      message: "Provide test instructions.",
      name: "testInstructions",
    },
    {
      type: "checkbox",
      message: "What type of license will you be using for your project?",
      choices: ["MIT", "GPLv3", "GPL", "N/A"], 
      name: "license",
    },
  ])

  // TODO: Create a function to write README file
  .then((answers) => {
    console.log(answers.license)
    const readme = generateMarkdown(answers);
    console.log(readme);
    fs.writeFile("./README.md", readme, (error) => {
      if (error) throw error;
      console.log("README saved");
    });
  })
  .catch((error) => console.log(error));

//TODO: Create a function to initialize app
function init() {}

//Function call to initialize app
init();
