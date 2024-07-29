const {getQuestions} = require("./questions");
const questions = getQuestions();
//apcahe 2.0 [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
//Mit license  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
//boost software license1.0 [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
//Eclipse Public License 1.0 [![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)

function generateBadge(responses){

    const mit = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    const apache = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    const boost = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    const eclipse = "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
    
  if(responses.license == "MIT license"){
        return mit;
    } else if (responses.license == "Apache License 2.0"){
        return apache;
    } else if (responses.license == "Boost software license 1.0"){
        return boost;
    } else {
        return eclipse;
    }
   
}

module.exports = {
    generateBadge: generateBadge
}
