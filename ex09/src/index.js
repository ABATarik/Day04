function main() {
    var firstNum = 6;
    var secundNum =25;
    var thirdNum =5.2
    
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