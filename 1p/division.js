var a=5,b="5";
function division(){
   if(a!=="number"&&b!=="number")
{
    print("No se pueden dividir caracteres");
    if(b===0)
    {
	print("No existe division entre cero");
    }
      
}
else return a/b;  
}
print(division());
