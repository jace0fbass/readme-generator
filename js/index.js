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
      message: "What is your project's walkthrough URL?",
      name: "walkthrough",
    },
    {
      type: "input",
      message: "What is your project's screenshot URL?",
      name: "screenshot",
    },
    {
      type: "input",
      message: "What is your project's title?",
      name: "title",
    },
    {
      type: "input",
      message: "What was your motivation?",
      name: "motivation",
    },
    {
      type: "input",
      message: "Describe your project.",
      name: "description",
    },
    {
      type: "input",
      message: "What problem does your project solve?",
      name: "problemSolved",
    },
    {
      type: "input",
      message: "What did you learn?",
      name: "learned",
    },
    {
      type: "input",
      message: "What makes your project stand out?",
      name: "standOut",
    },
  ])

  // TODO: Create a function to write README file
  .then((answers) => {
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
