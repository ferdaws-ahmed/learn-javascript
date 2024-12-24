


var names = [45,54,21,87,88,65,88,66,48,66,44,55,44,55];
var uniqueName = [];
 
for (var i = 0; i < names.length; i++){
    var elements = names[i];
    var index = uniqueName.indexOf(elements);
    if( index == -1){
        uniqueName.push(elements);
    }
}
console.log(uniqueName);















// practice 1:

var names = ['rakib', 'pakib', 'takib','pakib','sakib'];
var uniqueName = [];
 for ( var i = 0; i < names.length; i++){
        var elements = names[i];
        var check = uniqueName.indexOf(elements);
        if( check == -1){
            uniqueName.push(elements);
        }
 }
    console.log(uniqueName);