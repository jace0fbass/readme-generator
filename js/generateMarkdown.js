//TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`;
    } else if (license === "GPLv3"){
    return `[![License: GPLv3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`;
    } else if (license === "GPL") {
    return `[![License: GPL](https://img.shields.io/badge/License-GPL-blue.svg)]`;
    } else {
       return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `[![License: MIT](https://opensource.org/licenses/MIT)`;
    } else if (license === "GPLv3"){
    return `[![License: GPLv3](https://www.gnu.org/licenses/gpl-3.0)`;
    } else if (license === "GPL") {
    return `[![License: GPL](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
    } else {
       return ""
}}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT") {
    return ``;
    } else if (license === "GPLv3"){
    return ``;
    } else if (license === "GPL") {
    return ``;
    } else {
       return ""
}}

const generateMarkdown = (data) => {
  const {
    title,
    email,
    username,
    repo,
    link,
    instInstructions,
    description,
    usage,
    contributors,
    testInstructions,
    license,
  } = data;
  return `
# ${title}

## Table of Contents
   - [License](#License)
   - [User Contact](#User)
   - [Description](#Description)
   - [Installation Instructions](#Installation)
   - [Usage Information](#Usage)
   - [Contributors](#Contributors)
   - [Test Instructions](#Test)
   - [Questions](#Questions)
    
## License
    ${renderLicenseBadge(license)}

## User Contact
    Email address: ${email}

    Github username: ${username}  

    Github repository: ${repo}

    Deployed link: ${link}
                
## Description 
    ${description}

## Installation Instructions
    ${instInstructions}

## Usage Information 
    ${usage}

## Contributors 
    ${contributors}

## Test Instructions 
    ${testInstructions}

## Questions



  `;
};
export default generateMarkdown;
