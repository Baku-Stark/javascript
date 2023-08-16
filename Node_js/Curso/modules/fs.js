const fs  = require('fs');
const path = require('path');

// Create a FOLDER
fs.mkdir(path.join(__dirname, "/test"), (error) => {
    if(error){
        return console.log(`Error: ${error}`);
    }
    console.log("Pasta criada com sucesso!");
})

// =======================================================
// *** Create a FILE
fs.writeFile(path.join(__dirname, "/test", "test.txt"), "Hello Node! (fs.js - Write File)\n",
(error) => {
    if(error){
        return console.log(`Error: ${error}`);
    }
    console.log("Arquivo criado com sucesso!");
})

// *** Create a FILE [Update File]
fs.appendFile(path.join(__dirname, "/test", "test.txt"), "Hello World! (fs.js - Append File)\n",
(error) => {
    if(error){
        return console.log(`Error: ${error}`);
    }
    console.log("Arquivo atualizado com sucesso!");
})

// *** Read a File
fs.readFile(path.join(__dirname, "/test", "test.txt"), "utf-8",
(error, data) => {
    if(error){
        return console.log(`Error: ${error}`);
    }
    console.log(data);
});
// =======================================================