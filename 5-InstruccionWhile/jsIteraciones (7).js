function Mostrar()
{

	var contador=0;
	contador=parseInt(contador);
	var acumulador=0;
	acumulador=parseInt(acumulador);
	var respuesta/*=si*/;

	
	//while(respuesta=="si")
	do{


        acumulador=acumulador+parseInt(prompt("ingrese el valor : "+(contador+1)));
		contador++;
		respuesta=prompt("quiere ingresar otro numero?");
		while(!(respuesta=="si" || respuesta=="no"))
		{
			respuesta=prompt("invalido: ingrese si o no");
		}

	}while(respuesta=="si");

	

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN