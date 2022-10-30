const generateMarkdown = (data) => {
  const {
    title,
    email,
    username,
    repo,
    link,
    walkthrough,
    motivation,
    description,
    problemSolved,
    learned,
    standOut,
  } = data;
  return `
<!DOCTYPE md>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
<title>README.md generator</title>
</head>
<body>
    <div class="container">
    <h1>${title}</h1>
    <div class="column">
        <h2>User Contact</h2>
        <a href="https://github.com/${username}/"><i class="bi bi-github fs-3"></i>${username}</a>
        <br>
        <a href="${repo}"> 
            <i class="bi bi-github fs-3"></i>Repository
        </a>
        <br>
        <a href="${link}">
            <i class="bi bi-github fs-3"></i>Deployed
        </a>
        <br>
        <a href="mailto:<nowiki>${email}?
            subject=subject text"><i class="bi bi-envelope-fill"></i> Email ${username}
        </a>
        <br>
        <h2>Walkthrough</h2>
        <a href="${walkthrough}">View walkthrough
        </a>
        <br>
        <h2>Motivation</h2> 
            <p>${motivation}</p>
        <h2>Description</h2> 
            <p>${description}</p>
        <h2>Problems Solved</h2> 
            <p>${problemSolved}</p>
        <h2>Learned</h2> 
            <p>${learned}</p>
        <h2>Appeal</h2> 
        <p>${standOut}</p>
    </div>
</div>
</div>
</div>
</body>
</html>
`;
};
export default generateMarkdown;
// TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {""}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {""}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {""}
