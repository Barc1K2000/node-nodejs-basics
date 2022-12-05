import { Worker, getEnvironmentData, resourceLimits } from "worker_threads"
import { cpus } from "os"
const performCalculations = async () => {
    const promiseCreator = (n) => {
        return new Promise((res, rej) => {
            new Worker("./src/wt/worker.js", {
                workerData: n
            })
                .on("message", res)
                .on("error", rej)
        })
    }
    const promises = []
    for (let coreCount = 10; coreCount < 10 + cpus().length; coreCount++) {
        promises.push(promiseCreator(coreCount))
    }
    Promise.all(promises)
        .then(data => console.log(data))
};

await performCalculations();