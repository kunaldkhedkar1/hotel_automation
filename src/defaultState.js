function getDefaultState(noOfFLoors, corridoorConfMapping){
    const output = [];
    for(let floor=1; floor<= noOfFLoors; floor++){
        const floorOutput = {};
            Object.keys(corridoorConfMapping).forEach(key => {
                floorOutput[key] = getCorridoors(corridoorConfMapping[key]);
            });
        output.push(floorOutput);
    }
    return output;
}

function getCorridoors(conf) {
    const output = [];
    for (let corridor = 1; corridor <= conf.corridorsPerFloor; corridor++) {
        const corridorOutput = {
            lights:[{
                count: corridor,
                status: conf.lightsDefaultState
            }],
            ACs:[{
                count: corridor,
                status: conf.ACDefaultState
            }],
        }
        output.push(corridorOutput);
    }
    return output;
}

module.exports = getDefaultState;