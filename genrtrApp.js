const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template.js');


const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
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
  ]);
};

promptUser().then(answers => console.log(answers));




// fs.writeFile('index.html', generatePage(), err => {
//   if (err) throw err;
  
//   console.log('READme complete! Check out index.html to see the output!');
// });






