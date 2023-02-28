// function to generate markdown for README

const renderLicenseBadge = (license) => {
if (license !== "none") {
  return `![Github license](https://img.shield.io./badge/licence-${license}-blue.svg)`
  }
  return ''
}

const renderLicenseLink = (licence) => {
  if(licence !== "None") {
    return `\n* [Licence](#license)\n`
  }
  return '';
}

function generateMarkdown(data) {
  console.log(data);
  
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ### Description 

  ${data.desscription}

  ### Table of Contents

  * [Installation](#installation)

  * [Usage](#usage)

  ${renderLicenseLink(data.licence)}

  * [Contributing](#contributing)

  * [Test](#tests)

  * [Questions](#questions)

  ## Installation

  to install necessary dependencies, run the following command:

  \`\`\`
  ${data.installation}
  \`\`\`

  ## Usage

  ${data.usage}

  ## License

  ## Contributing

  ${data.contributing}

  ## Tests

  to run tests, run commands:

  \`\`\`
  ${data.test}
  \`\`\`

  ### Questions

  if you any questions contact at ${data.email}.

  Find me and my work at [${data.github}](http://github.com/${data.github}).










`;
}

module.exports = generateMarkdown;
