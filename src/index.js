const getDefaultState = require('./defaultState');
const hotelInfo = require('./hotelInfo');
const movement = require('./movement');
const printState = require('./printState');
const corridoorConfMapping = require('./corridoorConfMapping');

// const corridoorConfMapping = {
//         mainCorridor: hotelInfo.mainCorridoorConf,
//         subCorridor: hotelInfo.subCorridoorConf
//     };

const defaultState = getDefaultState(hotelInfo.noOfFLoors, corridoorConfMapping);

const updatedState = movement(defaultState, 1, 1, 'subCorridor');

printState(defaultState,corridoorConfMapping);
printState(updatedState,corridoorConfMapping);






module.exports = getDefaultState;
