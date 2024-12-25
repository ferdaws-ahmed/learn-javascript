

function reversString (str){
 
     var reverse = "";
     for ( var i = 0; i <str.length; i++){
        var char = str[i];
        reverse = char + reverse;
     }
     return reverse;
}

var statements = reversString("this is 2nd testing.");
 console.log(statements);
 var result = reversString("this is 3rd testing.");
 console.log(result);