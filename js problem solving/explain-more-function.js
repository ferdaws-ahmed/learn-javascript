


function evenify (age){
    
    for ( var i = 0; i < age.length; i++){
        var num = age[i];
         
    
         if( num % 2 == 0){
             console.log(num, 'is even number.');
         }
         else{
             console.log(num,'is odd number.',num,'ke 2gun kora holo.', num * 2);
         }
    }

}


var friendAge = [34,64,61,75,26,71,89,23,58,86];
evenify(friendAge);
var studentAge = [23,69,77,29,87,44,30,68,55,92,98];
evenify(studentAge);
