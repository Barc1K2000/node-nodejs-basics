import { readdir, readFile } from 'node:fs/promises';
const read = async () => {
    try{
        const files = await readdir("./src/fs/files/")
        if(files.includes("fileToRead.txt"))
            return console.log(await readFile("./src/fs/files/fileToRead.txt", { encoding: 'utf8' }))
        throw new Error("FS operation failed")
    }
    catch(error){
        console.log(error)
    }
};

await read();