

    // vairable swap>>

//1st method:
var a = 10;
var b = 20;
console.log( "before swap: a = ", a, ",", " b = ", b);
var temp = b;
b = a;
var a = temp;
console.log("after swap: a =",a,","," b = ",b);

// 2nd method:
var  x = 10;
var  y = 20;
console.log ("befor swap: x = ", x, " y = ",y);

var x =10;
var y =20;
x = x + y;
y = x - y;
x = x - y;
console.log("after swap: x = ",x, " y = ",y);



// 3rd method:

var p = 10;
var q = 20;

[p, q] = [q, p];
console.log("after swap : p = ",p, "q = ",q);