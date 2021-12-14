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
// wtf is the 'license link' supposed to be?
function renderLicenseLink(license) {}

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

  ${renderLicenseBadge(license)}
  ## Description

  ${templateData.description}


  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [License](#license)
  * [Tests](#tests)
  * [Questions](#questions)


  ## Installation

  ${templateData.installation}


  ## Usage

  ${templateData.usage}


  ## Contributing

  ${templateData.contributing}


  ${renderLicenseSection(data.license)}
  ## Tests

  ${templateData.tests}


  ## Questions

  Find me on GitHub at username ${templateData.username}.
  Also, email me at ${templateData.email}.
  `;
}

module.exports = generateMarkdown;

// ![NPM](https://img.shields.io/npm/l/inquirer)
// https://img.shields.io/badge/<LABEL>-<MESSAGE>-<COLOR>