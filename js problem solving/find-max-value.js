

// find max value in 3 variables>>>>



// method 1 :

var napit = 1000;
var kapit = 200;
var tapit =650;

if( napit > kapit){
    if(napit > tapit){
        console.log("Napit is bigger than other.");
    }
    else{
        console.log('Tapit is bigger than other.');
    }
    
}
else{
    if(kapit > tapit){
        console.log("kapit is bigger than other.");
    }
    else{
        console.log("Tapit is bigger than other.")
    }

}



//method 2:

var num1 =100;
var num2 = 700;
var num3 = 300;
var num4 = 50;
var num5 = 500;

var max = Math.max(num1,num2,num3,num4,num5);
console.log( max, 'is max value in this list.');



//method 3:

var num1 =100;
var num2 = 700;
var num3 = 300;
var num4 = 5000;
var num5 = 500;
if(num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5){
    console.log(num1, "is max number in the 2nd number list.");
}
else if(num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5){
    console.log(num2, "is max number in the 2nd number list.");
}
else if(num3 > num1  && num3 > num2 && num3 > num4 && num3 > num5){
    console.log(num3, "is max number in the 2nd number list.");
}
else if(num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5){
    console.log(num4, "is max number in the 2nd number list.");
}
else{
    console.log(num5, "is max number in the 2nd number list.");
}




//method 3:

function findLargestNumber(num1, num2, num3, num4, num5){
    if(num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5){
        console.log(num1, "is max number in the 2nd number list.");
    }
    else if(num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5){
        console.log(num2, "is max number in the 2nd number list.");
    }
    else if(num3 > num1  && num3 > num2 && num3 > num4 && num3 > num5){
        console.log(num3, "is max number in the 2nd number list.");
    }
    else if(num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5){
        console.log(num4, "is max number in the 2nd number list.");
    }
    else{
        console.log(num5, "is max number in the 2nd number list.");
    }
    
    

}
findLargestNumber(45,15,656,85,65);





// method 4

  var marks = [54,21,64,86,48,65,96,45,64,63,74,86,55]
  var max = marks[0];
  for( var i = 0; i < marks.length; i++){
          var elements = marks[i];
          if( elements > max){
            max = elements;
              
          }
  }
  console.log(max, " is max number in this array.");
 

