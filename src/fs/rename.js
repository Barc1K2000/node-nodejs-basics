import { rename as rnm, readdir } from 'node:fs/promises';
const rename = async () => {
    try {
        const files = await readdir("./src/fs/files/")
        if (files.includes("wrongFilename.txt") && !files.includes("properFilename.md"))
            return rnm("./src/fs/files/wrongFilename.txt", "./src/fs/files/properFilename.md")
        throw new Error("FS operation failed")
    }
    catch (error) {
        console.log(error)
    }
};

await rename();