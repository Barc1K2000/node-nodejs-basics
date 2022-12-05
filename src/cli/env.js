const parseEnv = () => {
    let env_variables = []
    for (let key in process.env)
        if (key.startsWith("RSS_"))
            env_variables.push(`${key}=${process.env[key]}`)
    console.log(env_variables.join("; "))
};

parseEnv();