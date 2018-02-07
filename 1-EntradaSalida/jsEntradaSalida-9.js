/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
var importe;
var resultado;
importe = parseInt(document.getElementById("sueldo").value);
resultado = importe+(importe/10);
document.getElementById("resultado").value=resultado;
	
}
