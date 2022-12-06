
const executeCommands = require('./src/utils/executeCommands');
const path = require('path');
const fs = require('fs');
const StateController = require('./models/StateController');
const { argv } = require('process');

const commandsPath = path.join(__dirname,argv[2]);

const getCommands = async (inPath)=>{
    var file = await fs.readFileSync(inPath).toString();
    file = file.split('\r\n');
    return file;
}

const runApp = async ()=>{
    
    console.log(argv[2]);
    var commands = await getCommands(commandsPath);
    await executeCommands(commands);

}

runApp();