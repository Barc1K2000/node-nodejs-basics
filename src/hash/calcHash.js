import { readFile } from 'node:fs/promises';
const { createHmac } = await import('node:crypto');
const calculateHash = async () => {
    console.log(createHmac('sha256', await readFile("./src/hash/files/fileToCalculateHashFor.txt")).digest("hex"))
};

await calculateHash();