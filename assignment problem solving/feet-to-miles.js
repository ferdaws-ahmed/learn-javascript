
function feetToMiles(feet){
    var miles = feet / 5280;
    return miles;
}
 var nanaMiles = feetToMiles(4546456).toFixed(2);
  
 console.log("NanaMiles = ",nanaMiles, " miles.");
 var naniMiles = feetToMiles(594505).toFixed(2);
 console.log("NaniMiles = ",naniMiles, " miles.");
