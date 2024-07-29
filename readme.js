const {generateBadge} = require('./badgelogic')

function generateReadme(responses){
    const badges = generateBadge(responses);
    const readme = 
 
    `
## ${responses.projTitle}

### Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Useage](#usage)
* [Contributing](#contributing)
* [License](#license)
* [Tests](#tests)
* [Questions](#questions)

${badges}

## Description
${responses.description}


## Installation
${responses.installation}

## Usage
${responses.usage}

## Contributing
${responses.contribution}

## License
${responses.license}


## Tests
${responses.test}

## Questions
Find my work at the GitHub at https://github.com/${responses.githubUn}

Connect with me on linked in: www.linkedin.com/in/${responses.linkedin}

Feel free to send me an email at ${responses.email}

    `
    return readme;
}
module.exports = {
    generateReadme: generateReadme
}
