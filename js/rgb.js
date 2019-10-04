'use strict';


 
    var r = document.getElementById("r");
    var g = document.getElementById("g");
    var b = document.getElementById("b");

    var hex = document.getElementById("hex");


    function convert(){
      var red= r.value;
      var green = g.Value;
      var blue = b.value;

      var hexC= "#" + getHex(red)+ getHex(green)+getHex(blue);
      hex.value=hexC;
    };

    function getHex(value){
      var hexa=parseInt(value).toString(16);
      return hexa.length==1?"0" + hexa:hexa;
    }