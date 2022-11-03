
function renderLicenseBadge(license) {
  if (license[0] === "MIT") {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
    } else if (license[0] === "GPLv3"){
    return `![License: GPLv3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
    } else if (license[0] === "GPL") {
    return `![License: GPL](https://img.shields.io/badge/License-GPL-blue.svg)`;
    } else {
       return ""
  }
}


function renderLicenseLink(license) {
  if (license[0] === "MIT") {
    return `https://opensource.org/licenses/MIT`;
    } else if (license[0] === "GPLv3"){
    return `https://www.gnu.org/licenses/gpl-3.)`;
    } else if (license[0] === "GPL") {
    return `https://www.gnu.org/licenses/old-licenses/gpl.en.html`;
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

${renderLicenseLink(license)}

${renderLicenseSection(license)}

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
