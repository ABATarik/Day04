function main() {
    var firstNum
    var secundNum
    var thirdNum
    firstNum = 6;
    secundNum = 25;
    thirdNum = 5.2;


    firstNum *= 9;
    secundNum /= 5;
    thirdNum *= 10;

    return {
        firstNum,
        secundNum,
        thirdNum

    };
}

console.log(main());

module.exports = main;