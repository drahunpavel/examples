// console.log(process.argv);
function consoleToJSON() {
    const con = {};

    for(let i=0; i < process.argv.length; i++){
        const arg = process.argv[i].split('=');
        console.log('-', arg)
        con[arg[0]] = arg[1] ? arg[1] : true;
    };

    return con;
};

console.log('итого',consoleToJSON())