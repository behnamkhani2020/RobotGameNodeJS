const CharTable = require('terminal-char-table');
const drawBoard = (currentState,direction)=>{
    let table = new CharTable({column_align:"center"});
    var emptyRow = ['','','','',''];
    var robotDirection = '>';
    switch(direction){
        case "NORTH":
            robotDirection = '^';
            break;
        case "SOUTH":
            robotDirection = 'v';
            break;
        case "WEST":
            robotDirection = '<';
            break;
        case "EAST":
            robotDirection = '>';
            break;
        default:
            robotDirection = '>';
    }
    switch(currentState.toString()){
        case '0,0':
            table.append(emptyRow);
            table.append(emptyRow);
            table.append(emptyRow);
            table.append(emptyRow);
            table.append([`${robotDirection}`,'','','','']);
            break;
        case '0,1':
            table.append(emptyRow);
            table.append(emptyRow);
            table.append(emptyRow);
            table.append(emptyRow);
            table.append(['',`${robotDirection}`,'','','']);
            break;
        case '0,2':
            table.append(emptyRow);
            table.append(emptyRow);
            table.append(emptyRow);
            table.append(emptyRow);
            table.append(['','',`${robotDirection}`,'','']);
            break;
        case '0,3':
            table.append(emptyRow);
            table.append(emptyRow);
            table.append(emptyRow);
            table.append(emptyRow);
            table.append(['','','',`${robotDirection}`,'']);
            break;
        case '0,4':
            table.append(emptyRow);
            table.append(emptyRow);
            table.append(emptyRow);
            table.append(emptyRow);
            table.append(['','','','',`${robotDirection}`]);
            break;
        case '1,0':
            table.append(emptyRow);
            table.append(emptyRow);
            table.append(emptyRow);
            table.append([`${robotDirection}`,'','','','']);
            table.append(emptyRow);
            break;

        case '1,1':
            table.append(emptyRow);
            table.append(emptyRow);
            table.append(emptyRow);
            table.append(['',`${robotDirection}`,'','','']);
            table.append(emptyRow);
            break;
        case '1,2':
            table.append(emptyRow);
            table.append(emptyRow);
            table.append(emptyRow);
            table.append(['','',`${robotDirection}`,'','']);
            table.append(emptyRow);
            break;
        case '1,3':
            table.append(emptyRow);
            table.append(emptyRow);
            table.append(emptyRow);
            table.append(['','','',`${robotDirection}`,'']);
            table.append(emptyRow);
            break;
        case '1,4':
            table.append(emptyRow);
            table.append(emptyRow);
            table.append(emptyRow);
            table.append(['','','','',`${robotDirection}`]);
            table.append(emptyRow);
            break;
            
        case '2,0':
            table.append(emptyRow);
            table.append(emptyRow);
            table.append([`${robotDirection}`,'','','','']);
            table.append(emptyRow);
            table.append(emptyRow);
            break;
        case '2,1':
            table.append(emptyRow);
            table.append(emptyRow);
            table.append(['',`${robotDirection}`,'','','']);
            table.append(emptyRow);
            table.append(emptyRow);
            break;
        case '2,2':
            table.append(emptyRow);
            table.append(emptyRow);
            table.append(['','',`${robotDirection}`,'','']);
            table.append(emptyRow);
            table.append(emptyRow);
            break;
        case '2,3':
            table.append(emptyRow);
            table.append(emptyRow);
            table.append(['','','',`${robotDirection}`,'']);
            table.append(emptyRow);
            table.append(emptyRow);
            break;
        case '2,4':
            table.append(emptyRow);
            table.append(emptyRow);
            table.append(['','','','',`${robotDirection}`]);
            table.append(emptyRow);
            table.append(emptyRow);
            break;

        case '3,0':
            table.append(emptyRow);
            table.append([`${robotDirection}`,'','','','']);
            table.append(emptyRow);
            table.append(emptyRow);
            table.append(emptyRow);
            break;
        case '3,1':
            table.append(emptyRow);
            table.append(['',`${robotDirection}`,'','','']);
            table.append(emptyRow);
            table.append(emptyRow);
            table.append(emptyRow);
            break;
        case '3,2':
            table.append(emptyRow);
            table.append(['','',`${robotDirection}`,'','']);
            table.append(emptyRow);
            table.append(emptyRow);
            table.append(emptyRow);
            break;
        case '3,3':
            table.append(emptyRow);
            table.append(['','','',`${robotDirection}`,'']);
            table.append(emptyRow);
            table.append(emptyRow);
            table.append(emptyRow);
            break;
        case '3,4':
            table.append(emptyRow);
            table.append(['','','','',`${robotDirection}`]);
            table.append(emptyRow);
            table.append(emptyRow);
            table.append(emptyRow);
            break;

        case '4,0':
            table.append([`${robotDirection}`,'','','','']);
            table.append(emptyRow);
            table.append(emptyRow);
            table.append(emptyRow);
            table.append(emptyRow);
            break;
        case '4,1':
            table.append(['',`${robotDirection}`,'','','']);
            table.append(emptyRow);
            table.append(emptyRow);
            table.append(emptyRow);
            table.append(emptyRow);
            break;
        case '4,2':
            table.append(['','',`${robotDirection}`,'','']);
            table.append(emptyRow);
            table.append(emptyRow);
            table.append(emptyRow);
            table.append(emptyRow);
            break;
        case '4,3':
            table.append(['','','',`${robotDirection}`,'']);
            table.append(emptyRow);
            table.append(emptyRow);
            table.append(emptyRow);
            table.append(emptyRow);
            break;
        case '4,4':
            table.append(['','','','',`${robotDirection}`]);
            table.append(emptyRow);
            table.append(emptyRow);
            table.append(emptyRow);
            table.append(emptyRow);
            break;
            
            default:
                table.append(emptyRow);
                table.append(emptyRow);
                table.append(emptyRow);
                table.append(emptyRow);
                table.append(emptyRow);          
    }
    console.log(table.string(20));
}

module.exports = drawBoard;
