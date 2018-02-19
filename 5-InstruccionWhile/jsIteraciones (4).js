function Mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");
numero=parseInt(numero);
while(numero>9 || numero<0)
{
//alert("invalido");
numero = prompt("numero invalido: reingrese un número entre 0 y 10.");
}
alert("valido");
}//FIN DE LA FUNCIÓN