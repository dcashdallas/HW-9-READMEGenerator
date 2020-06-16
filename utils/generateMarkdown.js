function generateMarkdown(answers, data) {
  return `
<h1 align="center">${answers.title}</h1>
  ## Description\n
  ${answers.description}
  ## Table of Contents<br>
  **[Installation](#Installation)**<br>
  **[Usage](#Usage)**<br>
  **[License](#License)**</br>
  **[Contributors](#Contributors)**<br>
  **[Contact](#Contact)**<br>
  
  ## **Installation Process**<br>  
  ${answers.installation}
  ## **Usage**<br>
  ${answers.description}
  ## **License**<br>
  ${answers.license}
  ## **Additional Contributors**<br>
  ${answers.contributors}

  ## **Contact**<br>
  <img src="${data.avatar_url}" class="profile" align="left" height="80"/>
  ${answers.email}<br>
  
  <p align="center" margin="35px">
    <a>
      <img src="https://img.shields.io/badge/Author%3A-Daniel%20Cash-red"/></>
    <a>
    <a>
    <img src="https://img.shields.io/badge/Release%20Version%20-1.0-green"/></>
    <a>
    </p>
`;
}

module.exports = generateMarkdown;
