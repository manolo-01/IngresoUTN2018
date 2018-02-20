function Mostrar()
{

	var flag=0;
	// declarar variables
	var maximo=parseInt(maximo);
	var minimo=minimo=parseInt(minimo);
	var dato=0;
	
	//dato=parseInt(dato);

	var respuesta/*="si"*/;
       
	//while(respuesta!="no")
	do{
		 dato=parseInt(prompt("ingrese un numero"));
		
		if(dato>maximo || flag==0)
		maximo=dato;
		if(dato<minimo || flag==0)
		{
		    flag=1;
			minimo=dato;	
		}
		

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