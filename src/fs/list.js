import { readdir } from 'node:fs/promises';
const list = async () => {
    try {
        const files = await readdir("./src/fs/")
        if (files.includes("files"))
            return console.log(await readdir("./src/fs/files/"))
        throw new Error("FS operation failed")
    }
    catch(error){
        console.log(error)
    }
};

await list();