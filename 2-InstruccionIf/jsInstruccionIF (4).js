function Mostrar()
{
//tomo la edad  
var edad;
edad=parseInt(document.getElementById("edad").value);
if((12<edad) && (edad<18))
alert("usted es adolescente");
else
alert("usted no es un adolescente");


}//FIN DE LA FUNCIÓN