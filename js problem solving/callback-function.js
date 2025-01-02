

function callBack (name, age, task){
    console.log('Your Name is ',name);
    console.log('Your Age is', age);
    task()
}

function washHand(){
    console.log('Wash your hand first');
}
function gosolKoro(){
    console.log('Tumi gosol koro taratari');
}
function vatKhaw(){
    console.log('Vat khaw siggir. Noile mair ase kopale');
}
callBack('pokom', 15, washHand);
callBack('mokom', 22, gosolKoro);
callBack('tokom', 19, vatKhaw);
callBack('fokom', 13, vatKhaw);