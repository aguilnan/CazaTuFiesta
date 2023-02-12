
/*Temporizador para que las imagenes del slider se vayan mostrando solas*/
var n = 1;
window.setInterval(function(){
if(n==1){
	$(document).ready(function () {
        $('#foto1')[0].click();
    });
}
if(n==2){
	$(document).ready(function () {
        $('#foto2')[0].click();
    });
}
if(n==3){
	$(document).ready(function () {
        $('#foto3')[0].click();
    });
}
if(n==4){
	$(document).ready(function () {
        $('#foto4')[0].click();
    });
}

n++;
if(n==5){
 	n=1;
}

},5000);

/*Se crea esta funcion para mostrar las fotos dependiendo de la categoria de búsqueda que se seleccione*/

function funcClick(){
 var select = document.getElementById("selectFotos");
 var value = select.value;
 var text = select.options[select.selectedIndex].text;

var im1 = document.getElementById("im1");
var im2 = document.getElementById("im2");
var im3 = document.getElementById("im3");

im1.src = "Images/"+ value +"/1.jpg";
im2.src = "Images/"+ value +"/2.jpg";
im3.src = "Images/"+ value +"/3.jpg";

alert("El texto seleccionado es: " + text);
}
