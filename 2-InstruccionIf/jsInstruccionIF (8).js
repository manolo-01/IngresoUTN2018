function Mostrar()
{
//tomo la edad  
var edad;
var estadoCivil;

edad=parseInt(document.getElementById("edad").value);
estadoCivil=document.getElementById("estadoCivil").value;

if((edad>17)&&(estadoCivil=="Soltero"))
alert("es soltero y no es menor");
	
	


}//FIN DE LA FUNCIÓN