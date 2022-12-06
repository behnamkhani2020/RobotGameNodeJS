class StateController {
    constructor(){
        this.states = this.generateAllStates();
        this.currentState = this.states[0];
        this.currentDirection = 'EAST';
    }
    generateAllStates = ()=>{
        var states = [];
        for(let i=0; i<5 ; i++){
            for(let j=0; j<5 ; j++){
                states.push([i,j])
            }
        }
        return states;
    }
    getState(){
        return this.currentState;
    }
    getDirection(){
        return this.currentDirection;
    }
    getAllStates(){
        return this.states;
    }
    logState(){
        console.log(this.currentState,this.currentDirection);
    }
    setState(inState,direction){
        this.currentState = inState;
        this.currentDirection = direction;
    }
}

module.exports = StateController;
