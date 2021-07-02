const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

let totalBatteries = 0;

const reducer = (accumulator, currentValue) => accumulator + currentValue;

totalBatteries = batteryBatches.reduce(reducer);