// TODO: Create a function that returns a license badge based on which license is passed in

const { template } = require("lodash");

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None") {
    return '';
  }

  return `
  ![license badge](https://img.shields.io/badge/license-${license}-green)
  `;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return license === "None" ? '':`* [License](#license)`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  }

  return `
  ## License

  See above badge for license info.


  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(templateData) {
  return `
  # ${templateData.title}

  ${renderLicenseBadge(templateData.license)}
  ## Description

  ${templateData.description}


  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  ${renderLicenseLink(templateData.license)}


  ## Installation

  ${templateData.installation}


  ## Usage

  ${templateData.usage}


  ## Contributing

  ${templateData.contributing}


  ${renderLicenseSection(templateData.license)}
  ## Tests

  ${templateData.tests}


  ## Questions

  Find me on GitHub at username ${templateData.username}.<br>
  Also, email me at ${templateData.email}.
  `;
};

module.exports = generateMarkdown;