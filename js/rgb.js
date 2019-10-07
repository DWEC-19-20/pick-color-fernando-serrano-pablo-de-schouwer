'use strict';

var r=document.getElementById('r');
var g=document.getElementById('g');
var b=document.getElementById('b');

var hex=document.getElementById('hex');

function convert(){

  var red= r.value;
  var green= g.value;
  var blue= b.value;

  var hexC= "#"+getHex(red)+getHex(green)+getHex(blue);
  hex.value=hexC;
};
function getHex(value){
  var hexa=parseInt(value).toString(16);
  return hexa.length==1?"0"+hexa:hexa;

};
/* Función que al pasar un valor RGB en representación hexadecimal
   devuelve la representación en formato decimal con el formato RRRGGGBB*/



function converter(){
                   
    var hex='#';
    var h=document.getElementById('rgb').value;

if(h.length==4){
    for(var i=1;i < h.length;i++){
        hex+=h[i]+h[i];
    }
}
else if(h.length==7){
    hex=h;
}
else
    {
      window.alert("No es valido");
    }
var getHex=hex.substring(1);
var getHex1=getHex.substring(0,2);
var getHex2=getHex.substring(2,4);
var getHex3=getHex.substring(4);

var getInt1=parseInt(getHex1,16);
var getInt2=parseInt(getHex2,16);
var getInt3=parseInt(getHex3,16);
var setInt = document.getElementById('int')
 setInt.value="R: "+getInt1+"        G: "+getInt2+"       B: " + getInt3;
  };
  

    