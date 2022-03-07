const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template.js');





  fs.writeFile('index.html', generatePage(), err => {
    if (err) throw err;
  
    console.log('READme complete! Check out index.html to see the output!');
  });






