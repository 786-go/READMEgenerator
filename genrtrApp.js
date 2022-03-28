const inquirer = require('inquirer');
const fs = require('fs');
const { generatePage } = require('./src/page-template.js');
const markdownGenerator  = require('./src/markdownGenerator')

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'projectTitle',
      message: 'What is the title of your project?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of your project:'
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the installation instructions, if any, of your project?'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please provide any usage information for users to know:'
    },
    {
      type: 'list',
      name: 'license',
      choices:["MIT","ISC","Apache2.0","GPL"],
      message: 'What licenses do you have?'
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'What are the guidelines if other people would like to contribute to your project?'
    },
    {
      type: 'input',
      name: 'test',
      message: 'What are the instructions for testing, if any?'
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your Github username?'
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?'
    }
  ])
};


promptUser()
.then(response => {
const markdown = markdownGenerator(response)
fs.writeFileSync('./README.md', markdown, err => {
  if (err) throw new Error(err);
})

    const READme = generatePage(response);

    fs.writeFile('index.html', READme, err => {
      if (err) throw new Error(err);

      console.log('Page created!')
    });
  });