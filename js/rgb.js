'use strict';

var r=document.getElementById('r');
var g=document.getElementById('g');
var b=document.getElementById('b');

var hexadecimal=document.getElementById('hexadecimal');




function convert(){

  var red= r.value;
  var green= g.value;
  var blue= b.value;

  var hexC= "#"+convertAHexa(red)+convertAHexa(green)+convertAHexa(blue);
  hexadecimal.value=hexC;
};
function convertir(){
                   
  var hexadecimal='#';
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
setInt.value="R: "+getInt1+"       G: "+getInt2+"     B: " + getInt3;
};


function rgb(r, g, b){
    r=rango(r);
    g=rango(g);
    b=rango(b);
  var hexa;
  hexa="#"+(convertAHexa(r)+convertAHexa(g)+convertAHexa(b)).toUpperCase();
  return hexa;
}

function convertAHexa(x){
var h;
h=parseInt(x).toString(16);
return h.length == 1 ? "0" + h : h;
}

function rango(x){
  if (x>255)x=255;
  else if(x<0)x=0;
  return x;
}
/* Función que al pasar un valor RGB en representación hexadecimal
   devuelve la representación en formato decimal con el formato RRRGGGBB*/


function hex(hex){
  
  var r,g,b,i;
    if (hex.substr(0,1)=='#'){
    i=1; 
  }
  else {
    i=2;
  }
  r=hex.substr(i, 2);
  r=aDecimal(r);
  r=concero(r);
  g=hex.substr(i+2, 2);
  g=aDecimal(g);
  g=concero(g);
  b=hex.substr(i+4, 2);
  b=aDecimal(b);
  b=concero(b);
  return r+""+g+""+b;  
}
  
  function aDecimal(hex){
    var decimal=parseInt(hex,16);
    return decimal;
  }

  function concero(x){
    if (x<10)x="0"+x;
    if (x<100)x="0"+x;
    return x;
  }

    