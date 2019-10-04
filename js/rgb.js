'use strict';

/* Función que al pasar un valor RGB devuelva el resultado en representación hexadecimal




function rgb2hex(rgb){
  rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
  return (rgb && rgb.length === 4) ? "#" +
   ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
   ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
   ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
 }
 
 
 $('button').click(function(){
     var hex = rgb2hex( $('input').val() );
     $('.result').html( hex );
 });*/

 
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