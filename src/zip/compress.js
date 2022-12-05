import {createReadStream, createWriteStream, rm} from "fs"
import {createGzip} from "zlib"
const compress = async () => {
    const gzip = createGzip()
    const input = createReadStream("./src/zip/files/fileToCompress.txt")
    const output = createWriteStream("./src/zip/files/archive.gz")
    input.pipe(gzip).pipe(output)
    rm("./src/zip/files/fileToCompress.txt", ()=>console.log("compressed"))
};

await compress();