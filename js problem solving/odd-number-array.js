

function oddNumberFind (numbers){
    var oddNumber = [];
    for ( var i = 0; i<numbers.length; i++){
           var num = numbers[i];
           if(num % 2 == 0){
               
           }
           else{
               
               oddNumber.push(num);
           }
           
    }
    return oddNumber;
}

var studentAgeClass2 = [33,56,72,89,18,80,45,37,89,26,78,98];

var result = oddNumberFind(studentAgeClass2);



console.log(result);