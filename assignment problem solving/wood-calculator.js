

function woodCalculator (chr, tb, bd){
    var chair = chr * 1;
    var table = tb * 3;
    var bed = bd * 5;
    var wood = chair + table + bed;

    return wood;
} 

var nanaTotal = woodCalculator(5,7,5);
console.log("Nanar total ", nanaTotal, "qf wood lagbe.");

var naniTotal = woodCalculator(8,6,23);
console.log("Nanir total ", naniTotal, "qf wood lagbe.");

