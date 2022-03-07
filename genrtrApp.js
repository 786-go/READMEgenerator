const inquirer = require('inquirer');
const fs = require('fs');

const generatePage = () => {
  return `
  <!DOCTYPE html> 
  <html lang="en"> 
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Project READme</title>
  </head>

  <body>

    <h1>${'project title'}</h1>
    <h3><a href="https://github.com/${'github'}">Github</a></h3>

    <h3>Description</h3>

    <section>
    <h3>Table of Contents</h3>
    <ul>
        <li><a href="#install">Installation</a></li>
        <li><a href="#usage">Usage</a></li>
        <li><a href="#license">License</a></li>
        <li><a href="#contribute">Contributing</a></li>
        <li><a href="#tests">Tests</a></li>
        <li><a href="#questions">Questions</a></li>

    </section>

    <h3 id="install">Installation</h3>

    <h3 id="usage">Usage</h3>

    <h3 id="license">License</h3>

    <h3 id="contribute">Contributing</h3>

    <h3 id="tests">Tests</h3>

    <h3 id="questions">Questions</h3>



  </body>
  </html>
  `;
};
// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
  fs.writeFile('index.html', generatePage(), err => {
    if (err) throw err;
  
    console.log('READme complete! Check out index.html to see the output!');
  });






