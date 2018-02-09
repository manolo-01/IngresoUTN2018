function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var dato;
	dato=parseInt((Math.random()*10));

	if(dato<4)
	alert("nota: "+dato+", vamos la proxima se puede.");
	  else{
		  if(dato<9)
			alert("nota: "+dato+", aprobo!.");
			else
			alert("nota: "+dato+", excelente!.");
	  }
	

}//FIN DE LA FUNCIÓN