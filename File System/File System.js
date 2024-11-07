console.log("DELL, HP, LENOVO");

const fs= require('fs')
fs.readFile('Example.txt', 'utf8', (error, FileContent)=>{
    if (error) {
        throw error
    }
    console.log(FileContent);
})
let content = "SAMPLE FILE CREATED FOR TESTING PURPOSE"
fs.writeFile('file1.txt', content, (err)=>{
    if(err){
    console.error('Error Writing to file', err)
    return
}
    console.log('Filehas been created and text is written in it !!! '); 
})

const dirName = require('./Read_Dir_Names')
dirName('../NodeJS_Basics');
