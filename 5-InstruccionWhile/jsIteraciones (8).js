function Mostrar()
{

	var flag=0;
	var positivo=0;
	var negativo=1;
	var dato=0;
	var respuesta/*="si"*/;
	contador=parseInt(contador);
	positivo=parseInt(positivo);
	negativo=parseInt(negativo);

	//while(respuesta=="si")
	do{
		dato=prompt("ingrese un numero");
		dato=parseInt(dato);
		if(dato<0)
		negativo=negativo*dato;
		else
		{positivo=positivo+dato;
			contador==1;
		}
		respuesta=prompt("quiere ingresar otro numero?");
		while(!(respuesta=="si" || respuesta=="no"))
		{
			respuesta=prompt("invalido: ingrese si o no");
		}
	}while(respuesta=="si");

document.getElementById("suma").value=positivo;
if(contador==0)
negativo=0;
document.getElementById("producto").value=negativo;

}//FIN DE LA FUNCIÓN