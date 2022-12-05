import { cp, readdir } from 'node:fs/promises';
const copy = async () => {
    try {
        const files = await readdir("./src/fs/")
        if (files.includes("files") && !files.includes("files_copy"))
            return await cp("./src/fs/files/", "./src/fs/files_copy/", { recursive: true })
        throw new Error("FS operation failed")
    }
    catch (error) {
        console.log(error)
    }
};

copy();