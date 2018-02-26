function Mostrar()
{
var frente=0;
var fondo=0;
var perimetro=0;
perimetro=parseInt(perimetro);

frente=parseInt(document.getElementById("ancho").value);
fondo=parseInt((document.getElementById("alrgo").value));
perimetro=(frente+fondo)*2;
alert("el largo del alambre debe  ser : "+perimetro*3);
}
