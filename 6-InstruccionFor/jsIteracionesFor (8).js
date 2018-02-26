function Mostrar()
{
var contador=0;
numero=prompt("ingrese el numero a analizar");
for(var i=1;i<=numero;i++)
{
    if(numero%i==0)
    {
    console.log(i);
    contador++;
    }
}
if(contador==2)
alert("el numero " +numero+" es primo");
else
alert("el numero " +numero+" no es primo");

}//FIN DE LA FUNCIÓN