// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description
${data.description}

## Installations 
${data.installation}

## Usage
${data.usage}

## Credits
Contributors ${data.credits}

## License
${data.license}

## Test
This application was tested with: ${data.test}

## Contact
If you have any questions about this project, feel free to email me at: ${data.email}

`
}

module.exports = generateMarkdown;
