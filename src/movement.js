function movement(state ,floor, corridor, corridorType){
    const lightStatus =  getCorridoorLightStatus(state ,floor, corridor, corridorType);
    if(lightStatus === 'OFF' && !willPowerConsumptionExceedLimit(state, 5)){
            return updateLightStatus(state ,floor, corridor, corridorType);
    }
    else{
        if(turnOfSubCorridorAc(state))
        {
            return updateLightStatus(state ,floor, corridor, corridorType);
        }
        return state;
    }
}

function getCorridoorLightStatus(state ,floor, corridor, corridorType){
    return state[floor][corridorType][corridor].lights[0].status;
}


function willPowerConsumptionExceedLimit(state, offSet){
    let power =0,
     mainCorridor = 0,
     subCorridor = 0;
    state.forEach((floor) => {
        Object.keys(floor).forEach((corridorType) => {
            if(floor[corridorType][0].lights[0].status === 'ON'){
                power += 5;
            }
            if(corridorType = 'mainCorridor'){
                mainCorridor++;
            }
            else{
                subCorridor++;
            }
            power+=10;
        });
    });

    const powerLimit = (mainCorridor * 15) + (subCorridor * 10);
    if((power + offSet) > powerLimit)
     return true;
     return false;
}

function updateLightStatus(state ,floor, corridor, corridorType){
    const clonedState = JSON.parse(JSON.stringify(state));
    clonedState[floor-1][corridorType][corridor-1].lights[0].status = 'ON';
    return clonedState;
}

function turnOfSubCorridorAc(state){

}

module.exports = movement;