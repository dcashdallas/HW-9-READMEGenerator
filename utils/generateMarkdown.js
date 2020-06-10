function generateMarkdown(answers, data) {
  return `

${answers.description}
## Contents<br>
**[Installation](#Installation)**<br>
**[Usage](#Usage)**<br>
**[License](#License)**</br>
**[Contributors](#Contributors)**<br>
**[Tests](#Tests)**<br>
**[Contact](#Contact)**<br>
## **Installation**<br>

`;
}

module.exports = generateMarkdown;
