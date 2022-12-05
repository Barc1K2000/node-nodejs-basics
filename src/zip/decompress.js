import {createReadStream, createWriteStream, rm} from "fs"
import {createUnzip} from "zlib"
const decompress = async () => {
    const unzip = createUnzip()
    const input = createReadStream("./src/zip/files/archive.gz")
    const output = createWriteStream("./src/zip/files/fileToCompress.txt")
    input.pipe(unzip).pipe(output)
    rm("./src/zip/files/archive.gz", ()=>console.log("decompressed"))
};

await decompress();