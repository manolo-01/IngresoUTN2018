function Mostrar()
{

	var contador=parseInt(contador)=0;
	var acumulador=parseInt(acumulador)=0;
	var respuesta='si';

	
	while(respuesta=="si")
	{


        acumulador=acumulador+parseInt(prompt("ingrese el valor : "+(contador+1)));
		contador++;
		respuesta=prompt("quiere ingresar otro numero?");
		while(!(respuesta=="si" || respuesta=="no"))
		{
			respuesta=prompt("ingreso invalido: ingrese si o no");
		}

	}

	

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN