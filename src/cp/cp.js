import {fork} from "child_process"
const spawnChildProcess = async (args) => {
    const child = fork("./src/cp/files/script.js", args)
};

spawnChildProcess();