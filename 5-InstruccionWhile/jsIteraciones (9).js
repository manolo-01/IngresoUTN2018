function Mostrar()
{

	var contador=0;
	// declarar variables
	var maximo=parseInt(maximo);
	var minimo=minimo=parseInt(minimo);
	var dato=0;
	
	//dato=parseInt(dato);

	var respuesta/*="si"*/;
        dato=parseInt(prompt("ingrese un numero"));
		maximo=dato;
		minimo=dato;
	//while(respuesta!="no")
	do{
		
		if(dato>maximo)
		maximo=dato;
		else if(dato<minimo)
		minimo=dato;

		respuesta=prompt("quiere ingresar otro numero?");
		while(!(respuesta=="si" || respuesta=="no"))
		{
			respuesta=prompt("invalido: ingrese si o no");
			
		}
		if(respuesta!="no")
			dato=parseInt(prompt("ingrese un numero"));
	}while(respuesta!="no");

document.getElementById("maximo").value=maximo;
document.getElementById("minimo").value=minimo;


}//FIN DE LA FUNCIÓN