

const generatePage = (generatePage) => {
  return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>${generatePage.projectTitle} READme</title>
    </head>
  
    <body>
      
      <h1>${generatePage.projectTitle}</h1>
      
  
      <h3>Description</h3>
      ${generatePage.description}
      <section>
          <h3>Table of Contents</h3>
          <ul>
              <li><a href="#install">Installation</a></li>
              <li><a href="#usage">Usage</a></li>
              <li><a href="#license">License</a></li>
              <li><a href="#contribute">Contributing</a></li>
              <li><a href="#tests">Tests</a></li>
              <li><a href="#questions">Questions</a></li>
          </ul>
      </section>
  
      <h3 id="install">Installation</h3>
      ${generatePage.installation}
        
      <h3 id="usage">Usage</h3>
      ${generatePage.usage}
  
      <h3 id="license">License</h3>
  
      <h3 id="contribute">Contributing</h3>
      ${generatePage.contribution}
  
      <h3 id="tests">Tests</h3>
      ${generatePage.test}
  
      <h3 id="questions">Questions</h3>
      <a href="https://github.com/${generatePage.github}">Github</a>
      Email address for further questions and inquiries: ${generatePage.email}
  
      
    </body>
    </html>
    `;
};

module.exports = { generatePage };