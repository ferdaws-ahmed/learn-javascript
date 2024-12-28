

function animalCalculator (depth){
    var animal = 0;
    if(depth <= 10){
        animal = depth * 50;
    }
    else if( depth <= 20){
        var firstPart = 10 * 50;
        var remainning = depth - 10;
        var secondPart = remainning * 100;
        animal = firstPart + secondPart;
    }
    else{
        var firstPart  = 10 * 50;
        var secondPart = 10 * 100;
        var remainning = depth - 20;
        var thirdPart = remainning * 300;
        animal = firstPart + secondPart + thirdPart;
    }
    return animal;
}

var countAnimal = animalCalculator(30);
console.log(countAnimal);