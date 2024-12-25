
function brickCalculator (floor){

    var floorNumber = floor;
    var feet1 = 15;
    var feet2 = 12;
    var feet3 = 10;
    var brick = 1000;
    if(floor<=10){
       var calculateBrick = (feet1 * brick) * floor;
    }
    else if(floor<=20){
        var calculateBrick =  (feet2 * brick) * floor;
    }
    else{
        var calculateBrick = (feet3 * brick) * floor;
    }
    return [floorNumber, calculateBrick]


}

var [floorNumber, totalBrick] = brickCalculator(3);
console.log( "A",floorNumber,"-floor bulding is estimated to require around",totalBrick," bricks for its cnstruction.");
