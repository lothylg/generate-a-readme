const inquirer = require("inquirer");
const {writeFile} = require('fs');
const {generateReadme} = require("./readme");
const {getQuestions} = require("./questions");
const questions = getQuestions();
const {generateBadge} = require("./badgelogic");
// const badges = generateBadge();

async function start(){
    const responses = await inquirer.prompt(questions);
    const readme = generateReadme(responses);

    console.log("hello!!!")
    
    writeFile("README.md", `${readme}`, (err) => {
      if( err ){
        console.error("There was an error writing the file.")
      } else {
        console.log("File written successfully!")
      }
    })
  }
  start();
