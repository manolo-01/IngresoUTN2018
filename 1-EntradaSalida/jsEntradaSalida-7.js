/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var numeroUno;
    var numeroDos;
    var suma;
    numeroUno=document.getElementById("numeroUno").value;
numeroUno=parseInt(numeroUno);
numeroDos=document.getElementById("numeroDos").value;
numeroDos=parseInt(numeroDos);
suma=(numeroUno+numeroDos);
alert("la suma de losdos numeros es :"+suma);
}

function restar()
{
	var numeroUno;
    var numeroDos;
    var resta;
    numeroUno=document.getElementById("numeroUno").value;
numeroUno=parseInt(numeroUno);
numeroDos=document.getElementById("numeroDos").value;
numeroDos=parseInt(numeroDos);
resta=(numeroUno-numeroDos);
alert("la diferencia entre los dos numeros es :"+resta);
}

function multiplicar()
{ 
	var numeroUno;
    var numeroDos;
    var producto;
    numeroUno=document.getElementById("numeroUno").value;
numeroUno=parseInt(numeroUno);
numeroDos=document.getElementById("numeroDos").value;
numeroDos=parseInt(numeroDos);
producto=(numeroUno*numeroDos);
alert("el producto entre los dos numeros es :"+producto);
}

function dividir()
{
	var numeroUno;
    var numeroDos;
    var division;
    numeroUno=document.getElementById("numeroUno").value;
numeroUno=parseInt(numeroUno);
numeroDos=document.getElementById("numeroDos").value;
numeroDos=parseInt(numeroDos);
division=(numeroUno/numeroDos);
alert("la division los dos numeros es :"+division);
}

