function Mostrar()
{

	var contador=0;
	var acumulador=0;
	contador=parseInt(contador);
	acumulador=parseInt(acumulador);

	while(contador<5)
	{
	;
	acumulador=acumulador+parseInt(prompt("ingrese el valor :"+(contador+1)));
    contador++;
	}
	



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN