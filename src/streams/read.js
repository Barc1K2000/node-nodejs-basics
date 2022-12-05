import { createReadStream } from 'node:fs';
import { stdout } from 'node:process';
const read = async () => {
    const stream = createReadStream("./files/fileToRead.txt")
    stream.pipe(stdout)
};

await read();