


function getQuestions(){
    return [
      {
        type: "input",
        message: "What is the title of your project?",
        name: "projTitle"
      },
      {
        type: "input",
        message: "Provide a description of your project?",
        name: "description"
      },
      {
        type: "input",
        message: "Provide installation detail?",
        name: "installation"
      },
      {
        type: "input",
        message: "How will this be used?",
        name: "usage"
      },
      {
        type: "input",
        message: "Detail the contribution guidelines",
        name: "contribution"
      },
      {
        type: "input",
        message: "Provide test instruction",
        name: "test"
      },
      {
        type: "list",
        message: "Which license will you be?",
        name: "license",
        choices: [ "MIT license", "Apache License 2.0", "Boost software license 1.0", "Eclipse Public License 1.0" ]
      },
      {
        type: "input",
        message: "What is your GitHub username?",
        name: "githubUn"
      },
      {
        type: "input",
        message: "What is your LinkedIn direct URL?",
        name: "linkedin"
      },
      {
        type: "input",
        message: "What is your email address?",
        name: "email"
      }
    ]
  }
  module.exports = {
    getQuestions: getQuestions
  }
