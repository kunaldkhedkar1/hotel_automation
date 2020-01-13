function printState(state,corridoorConfMapping){
    state.forEach((floorDetails, index) => {
        console.log(`Floor ${index + 1}`);
        Object.keys(corridoorConfMapping).forEach(key => {

        floorDetails[key].forEach((corridorDetails, index) => {
            console.log(`${corridoorConfMapping[key].corridorLable} ${index +1} Light ${corridorDetails.lights[0].count} : ${corridorDetails.lights[0].status} AC : ${corridorDetails.ACs[0].status}`);

        });
    });
    });
}

module.exports = printState;