


var arr = [45,89,65,32,78,45,69,55,84,29,63,41,75];

var sum = 0;
for( var i = 0; i < arr.length; i++){
    var elements = arr[i];
     sum = elements + sum;
    
}
console.log(sum);




// method 2:
function getArrySum (number){
    var sum = 0;
    for( var i = 0; i < number.length; i++){
        var elements = number[i];
        sum = elements + sum;
    }
    return sum;
}
var number = [78,45,96,35,96,45,61,83,67,16,46,56];
var result = getArrySum(number);

console.log(result);
var result2 = getArrySum([45,85,69,55,55])
console.log(result2);


