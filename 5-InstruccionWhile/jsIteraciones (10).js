function Mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	var sumaPositivos=0;
	var sumaNegativos=0;
	var positivos=0;
	var ceros=0;
	var negativos=0;
	var respuesta/*="si"*/;
	var pares=0;



	//while(respuesta!="no")
	do{
		dato=parseInt(prompt("ingrese un numero"));
		if(dato>0)
		{
			sumaPositivos=sumaPositivos+dato;
			positivos++;
		}
		else if(dato<0)
		{
			sumaNegativos=sumaNegativos+dato;
			negativos++;
		}
		else
		ceros++;
		if (dato%2==0)
		pares++;



		while(!(respuesta=="si" || respuesta=="no"))
		{
			respuesta=prompt("invalido: ingrese si o no");
			
		}
		if(respuesta!="no")
			dato=parseInt(prompt("ingrese un numero"));
	
	}while(respuesta!="no");




}//FIN DE LA FUNCIÓN