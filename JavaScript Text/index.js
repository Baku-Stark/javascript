/*
( r+ ) This flag opens the file for reading and writing

( w+ ) This flag opens the file for reading and writing and it also positions the stream at the beginning of the file

( a ) This flag opens the file for writing and it also positions the stream at the end of the file

( a+ ) This flag opens the file for reading and writing and it also positions the stream at the end of the file
*/ 


const fs = require('fs/promises')

async function example(){
    try{
        // diretório atual
        console.log("\033[0;34m"+__dirname+"\033[0m")

        // escrever no documento
        const content = "Veja este conteúdo que foi escrito!!"
        await fs.writeFile('notes/text.txt', content)
        console.log("Texto escrito!")

        // ler o texto escrito dentro do arquivo
        const data = await fs.readFile('notes/text.txt', 'utf-8')
        console.log(data)

        // criar uma pasta
        const creatFolder = await fs.mkdir('folderCreate')
        console.log('Pasta criada!!!')

        // mostrar os arquivos dentro de uma pasta
        const path = await fs.readdir('notes/', (err, files) => {files.forEach(file => {console.log(file)});})
        console.log(path)
    }
    catch (err){
        console.log(err)
    }
}

example()