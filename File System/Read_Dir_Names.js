const { log } = require('console')
const fs = require('fs');
const { forEach } = require('lodash');
function readFileNames(dir) {
    fs.readdir(dir, (err, file)=>{
        if(err)
            {
            console.log('ERROR IN READING Directory Content');
            return;
            }
        file.forEach(element => {
            console.log('file : ', element);
            });
    }
   
)   
}

module.exports = readFileNames