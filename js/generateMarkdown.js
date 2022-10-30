// TODO: Create a function that returns a license badge based on which license is passed in
const generateMarkdown = (data) => {
  const { motivation, why, problemSolved, learned, standOut } = data;
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <title>README.md generator</title>
</head>
<body>
    <div class="container">
        <div class="column">
                <img src="" class="img-fluid" alt="A picture of "/>
            </div>
            <div class="col-md-6">
                <p>Motivation: ${motivation}</p>
                <p>Why this project was built: ${why}</p>
                <p>Problems solved by this project: ${problemSolved}</p>
                <p>What was learned from this project: ${learned}</p>
                <p>This project stands out from others by: ${standOut}</p>
            </div>
        </div>
    </div>
</body>
</html>
    `;
};
export default generateMarkdown;
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {""}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {""}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {""}

// // TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }

// module.exports = generateMarkdown;
