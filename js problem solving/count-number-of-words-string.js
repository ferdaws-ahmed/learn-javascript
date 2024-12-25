

var sentence = "i am a puck boy. i can  puck any body every single time."

count = 0;
for (var i = 0; i <sentence.length; i++){
    var char = sentence[i];
    if(char == " " && sentence[i - 1] != " "){
       count++;
    }
     
}

console.log(count);












//practice 1:

var speech = "Bangladesh is my won country. it is very beautiful.  in this country have may puck boy.";

number = 0;
for( var i = 0; i < speech.length; i++){
    var char = speech[i];
    if(char == " " && speech[i - 1] != " "){
        number++;
    }
}
number++;
console.log(number);


//practice 2:
function reverseString(str){
    var count = 0;
    for ( var i = 0; i<str.length; i++){
        var char = str[i];
        if( char == " " && str[i -1] != " "){
            count++;
        }
       
    }
    count++;
    console.log(count);
    
    
}
 reverseString("i am  a puck boy")