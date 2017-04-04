function mostrar_mina() {
   var img = document.getElementById("mina");
   img.innerHTML = '<img src= "imagenes/mina.gif"/>';
}

function mostrar_numero1() {
	var uno = document.getElementById("uno");
	uno.innerHTML = '<img src= "imagenes/uno.jpg"/>';
}

function mostrar_numero2() {
	var dos = document.getElementById("dos");
	dos.innerHTML = '<img src= "imagenes/dos.jpg"/>';
}

function celdas_vacias() {
	var celdas= document.getElementById("celda");
	celdas.innerHTML= "";
}

var minas= document.getElementsByClassName("minas");
arreglo_minas=[minas];
console.log(arreglo_minas);
