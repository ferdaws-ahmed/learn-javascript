


var names = ['Rakib Hossen', 'Pakativ Hossen', 'Sakvib Vodkamin','pakim'];

function tinyName (nam){
    var shortName = names[0];
    
    for ( var i = 0; i < nam.length; i++){
        
        
        if(shortName.length >nam[i].length){
            shortName = nam[i];
        }
    
};
return shortName;
};
 var newNames = tinyName(names);
 console.log(newNames);

