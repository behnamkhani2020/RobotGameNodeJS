const StateController = require('../../models/StateController');
const asyncForEach = require('./asyncForeEach');
const drawBoard = require('./drawBoard');
const executeCommands =  async (commands)=>{
    const stateController = new StateController();
    console.log(commands);
    await asyncForEach(commands,async(command)=>{
        if(command.startsWith('PLACE')){
            console.log(command);
            command = command.split(' ');
            command = command[1].split(',');
            var currentState = stateController.getState();
            var currentDirection = stateController.getDirection();
            var allStates = stateController.getAllStates();
            var nextState =[+command[0],+command[1]];
            var nextDirection = command[2];
            let outOfBound = true;
            allStates.forEach((state)=>{
                if (state.toString() === nextState.toString()) {
                    outOfBound = false;
                }
            });
            if(outOfBound){
                console.log('Place is out of bound :( , Try again!!');
            }else{
                stateController.setState(nextState,nextDirection);
            }
            drawBoard(stateController.getState(),stateController.getDirection());
        }else if(command === 'MOVE'){
            console.log(command);
            var currentDirection = stateController.getDirection();
            var nextState = stateController.getState();
            switch(currentDirection){
                case "NORTH":
                    nextState[0]+=1;
                    if (nextState[0]>4) {
                        console.log('Place is out of bound :( , Try again!!');
                    }else{
                        stateController.setState(nextState,currentDirection);
                    }
                    var currentState = stateController.getState();
                    var currentDirection = stateController.getDirection();
                    drawBoard(currentState,currentDirection);
                    break;
                case "SOUTH":
                    nextState[0]-=1;
                    if (nextState[0]<0) {
                        console.log('Place is out of bound :( , Try again!!');
                    }else{
                        stateController.setState(nextState,currentDirection);
                    }
                    var currentState = stateController.getState();
                    var currentDirection = stateController.getDirection();
                    drawBoard(currentState,currentDirection);
                    break;
                case "WEST":
                    nextState[1]-=1;
                    if (nextState[1]<0) {
                        console.log('Place is out of bound :( , Try again!!');
                    }else{
                        stateController.setState(nextState,currentDirection);
                    }
                    var currentState = stateController.getState();
                    var currentDirection = stateController.getDirection();
                    drawBoard(currentState,currentDirection);
                    break;
                case "EAST":
                    nextState[1]+=1;
                    if (nextState[1]>4) {
                        console.log('Place is out of bound :( , Try again!!');
                    }else{
                        stateController.setState(nextState,currentDirection);
                    }
                    var currentState = stateController.getState();
                    var currentDirection = stateController.getDirection();
                    drawBoard(currentState,currentDirection);
                    break;
                default:
                    console.log('executing default');
            }
        }else if(command === 'LEFT'){
            console.log(command);
            var currentDirection = stateController.getDirection();
            var currentState = stateController.getState();
            switch(currentDirection){
                case "NORTH":
                    currentDirection = "WEST";
                    stateController.setState(currentState,currentDirection);
                    drawBoard(currentState,currentDirection);
                    break;
                case "SOUTH":
                    currentDirection = "EAST";
                    stateController.setState(currentState,currentDirection);
                    drawBoard(currentState,currentDirection);
                    break;
                case "WEST":
                    currentDirection = "SOUTH"
                    stateController.setState(currentState,currentDirection);
                    drawBoard(currentState,currentDirection);
                    break;
                case "EAST":
                    currentDirection = "NORTH";
                    stateController.setState(currentState,currentDirection);
                    drawBoard(currentState,currentDirection);
                    break;
                default:
                    console.log('executing default');
            }
        }else if(command === 'RIGHT'){
            console.log(command);
            var currentDirection = stateController.getDirection();
            var currentState = stateController.getState();
            switch(currentDirection){
                case "NORTH":
                    currentDirection = "EAST";
                    stateController.setState(currentState,currentDirection);
                    drawBoard(currentState,currentDirection);
                    break;
                case "SOUTH":
                    currentDirection = "WEST";
                    stateController.setState(currentState,currentDirection);
                    drawBoard(currentState,currentDirection);
                    break;
                case "WEST":
                    currentDirection = "NORTH"
                    stateController.setState(currentState,currentDirection);
                    drawBoard(currentState,currentDirection);
                    break;
                case "EAST":
                    currentDirection = "SOUTH";
                    stateController.setState(currentState,currentDirection);
                    drawBoard(currentState,currentDirection);
                    break;
                default:
                    console.log('executing default');
            }
        }else if(command === 'REPORT'){
            console.log(command);
            var currentState = stateController.getState();
            var currentDirection = stateController.getDirection();
            console.log(`STATE IS ${currentState} AND DIRECTION IS ${currentDirection}`);
        }
    });
}

module.exports = executeCommands;
