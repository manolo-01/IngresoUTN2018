function Mostrar()
{
//tomo el mes 
var mesDelAño;
mesDelAño = document.getElementById('mes').value;
switch(mesDelAño)
{
    case "Febrero":
    alert("Este mes no tiene mas de 29 dias.");
    break;
    default:
    alert("Este mes tiene 30 dias o mas");
    break;

}
//alert (mesDelAño);
	
	


}//FIN DE LA FUNCIÓN