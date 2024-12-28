


function factorialRecursive (num){
    for ( var i = 1; i <= num; i++){
        if( num == 1){
            return 1;
        }
        else{ 
           return num * factorialRecursive(num -1);
        }
    }
}
var result = factorialRecursive(5);
console.log(result);