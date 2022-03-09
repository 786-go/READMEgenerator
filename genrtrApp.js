const inquirer = require('inquirer');
const fs = require('fs');
const { generatePage } = require('./src/page-template.js');


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
  // .then(response => console.log(response))
.then(response => {

    const READme = generatePage(response);

    fs.writeFile('index.html', READme, err => {
      if (err) throw new Error(err);

      console.log('Page created!')
    });
  });