//TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;

    // } else if (license === "GPLv3"){
    //return `![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)`
    // } else if (license === "GPL") {
    //return `![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)`
    // } else {
    //    license = ""
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // let = ""
  // if ( === "MIT"){
  // } else if (=== "GPLv3"){
  // } else if (=== "GPL") {
  // } else {
  //     = ""
  // }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // let = ""
  // if ( === "MIT"){
  // } else if (=== "GPLv3"){
  // } else if (=== "GPL") {
  // } else {
  //     = ""
  // }
}
const generateMarkdown = (data) => {
  const {
    title,
    email,
    username,
    repo,
    link,
    motivation,
    description,
    problemSolved,
    learned,
    standOut,
    license,
  } = data;
  return `
${renderLicenseBadge(license)}
# ${title}
      
## User Contact
    Email address: ${email}

    Github username: ${username}  

    Github repository: ${repo}

    Deployed link: ${link}

                
## Motivation 
    ${motivation}
## Description 
    ${description}
## Problems Solved 
    ${problemSolved}
## Learned 
    ${learned}
## Appeal 
    ${standOut}
  `;
};
export default generateMarkdown;
