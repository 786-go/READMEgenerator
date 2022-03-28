
const markdownGenerator = (data) => {
    return (`
# Project Title: ${data.projectTitle}

## Table Of Contents
----------------------
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contribution](#contribution)
* [Tests](#test)
* [Questions](#questions)



### Description
${data.description}

### Installation
${data.installation}

### Usage
${data.usage}

### License
![GitHub license](https://img.shields.io/badge/license-${data.license}-green.svg)
${data.license}

### Contribute
${data.contribution}

### Tests
${data.test}

### Questions
Email :${data.email}
Developer's Profile:
[Github](https://github.com/${data.github})

    `)
};

module.exports = markdownGenerator;
