function Mostrar()
{
numero=prompt("ingrese el numero a analizar");
var contador=0;
for(var i=0;i<numero;i++)
{
    if(numero%i==0)
    {
    console.log(i);
    contador++;
    }
}
console.log("se encontraron "+contador+" divisores");


}//FIN DE LA FUNCIÓN