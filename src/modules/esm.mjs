import path from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import './files/c.js';
import aJSON from './files/a.json' assert { type: 'json' }
import bJSON from './files/b.json' assert { type: 'json' }

const random = Math.random();

export let unknownObject;

if (random > 0.5) {
    unknownObject = aJSON;
} else {
    unknownObject = bJSON;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);
const currentUrl = path.normalize(import.meta.url.split("/").splice(3, import.meta.url.length).join("/"))

console.log(`Path to current file is ${currentUrl}`);
console.log(`Path to current directory is ${path.dirname(currentUrl)}`);

export const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});


