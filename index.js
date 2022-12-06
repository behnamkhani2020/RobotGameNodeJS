
const executeCommands = require('./src/utils/executeCommands');
const path = require('path');
const fs = require('fs');
const StateController = require('./models/StateController');

const commandsPath = path.join(__dirname,'test0.txt');

const getCommands = async (inPath)=>{
    var file = await fs.readFileSync(inPath).toString();
    file = file.split('\r\n');
    return file;
}

const runApp = async ()=>{
    
    var commands = await getCommands(commandsPath);
    await executeCommands(commands);

}

runApp();