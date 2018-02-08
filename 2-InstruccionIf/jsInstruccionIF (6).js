function Mostrar()
{
//tomo la edad  
var edad;
edad=parseInt(document.getElementById("edad").value);
if(edad>17)
   alert("usted es mayor de edad");
   else{
       if(edad>12)
       alert("usted es un adolescente");
          else
          alert("usted es un niño");
}


}//FIN DE LA FUNCIÓN