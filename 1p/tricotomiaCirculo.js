var r=parent(readline());
var x=parseInt(readline());
var y=parseInt(readline());
var hip=Math.sqrt((x*x)+(y*y));
if(hip<r) print("El punto esta dentro del circulo");
else if(hip==r) print("El punto esta sobre el circulo");
else if(hip>r) print("El punto esta fuera del circulo");
