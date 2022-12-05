import { stdin, stdout } from "node:process";
import { Transform } from "node:stream"
const transform = async () => {
    const transform_stream = new Transform({
        transform(chunk, encoding, fn) {
            let reverse = [...chunk.toString()].reverse().splice(2, chunk.toString().length)
            fn(null, [...reverse, "\n", "\r"].join(""))
        },
    })
    stdin.pipe(transform_stream).pipe(stdout)
};

await transform();