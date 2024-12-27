


var names = ['Rakib Hossen', 'Pakativ Hossen', 'Sakvib Vodkamin'];
    var letterCounts = tinyName(names);
function tinyName(names){
    var letterCounts = [];
    for( var i = 0;  i < names.length; i++){
        var currentLetter = names[i];
        var letterCount = currentLetter.length;
        letterCounts.push(letterCount);
    }
    
}
tinyName(names);
console.log(letterCounts);
