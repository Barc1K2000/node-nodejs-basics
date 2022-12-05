import { appendFile, readdir } from 'node:fs/promises';
const create = async () => {
    try {
        const files = await readdir("./src/fs/files/")
        if (!files.includes("fresh.txt"))
            return await appendFile("./src/fs/files/fresh.txt", "I am fresh and young")
        throw new Error("FS operation failed")
    }
    catch (error) {
        console.log(error)
    }
};

await create();