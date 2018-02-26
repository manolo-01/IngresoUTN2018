function Mostrar()
{
var contador=0;
dato=prompt("ingrese un numero");
for(var i=0; i<dato;i++)
{
    if(i%2==0)
    {
    //console.log(i)
    document.write(i+"<br>");
    contador++;
    }
}
//console.log("pares: "+contador);
document.write("pares: "+contador);
}//FIN DE LA FUNCIÓN