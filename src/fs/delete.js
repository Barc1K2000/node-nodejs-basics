import { rm, readdir } from 'node:fs/promises';
const remove = async () => {
    try {
        const files = await readdir("./src/fs/files/")
        if (files.includes("fileToRemove.txt"))
            return await rm("./src/fs/files/fileToRemove.txt")
        throw new Error("FS operation failed")
    }
    catch (error) {
        console.log(error)
    }
};

await remove();