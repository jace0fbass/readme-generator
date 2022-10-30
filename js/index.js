// TODO: Include packages needed for this application
import fs from "fs";
import inquirer from "inquirer";
import generateMarkdown from "./generateMarkdown.js";
console.log(generateMarkdown);
// TODO: Create an array of questions for user input
inquirer.prompt([
    { 
      type: "input", 
      message: "What was your motivation?", 
      name: "motivation" 
    },
    {
      type: "input",
      message: "Why did you build this project?",
      name: "why"
    },
    {
      type: "input",
      message: "What problem does your project solve?",
      name: "problemSolved"
    },
    {
      type: "input",
      message: "What did you learn?",
      name: "learned"
    },
    {
      type: "input",
      message: "What makes your project stand out?",
      name: "standOut"
    }
  ])

.then(answers => {
  const readme = generateMarkdown(answers)
  console.log(readme)
})
// TODO: Create a function to write README file


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
