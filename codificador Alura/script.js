var botonEncriptar = document.querySelector("#btn-encriptar");
var botonDesencriptar = document.querySelector("#btn-desencriptar");
var copiar = document.querySelector("#copiar");


function encriptar(){
    var texto = document.getElementById("texto1").value;
     var txtCifrado = texto.replaceAll(/e/gm,"enter")
        .replaceAll(/o/gm,"ober")
        .replaceAll(/i/gm,"imes")
        .replaceAll(/a/gm,"ai")
        .replaceAll(/u/gm,"ufat");

    document.getElementById("ImgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
    console.log(txtCifrado)
}

function desencriptar(){
    var texto = document.getElementById("texto1").value;
    var txtCifrado = texto.replaceAll(/enter/gm,"e")
    .replaceAll(/ober/gm,"o")
    .replaceAll(/imes/gm,"i")
    .replaceAll(/ai/gm,"a")
    .replaceAll(/ufat/gm,"u");

    document.getElementById("ImgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function copiarText(){
var contenido = document.getElementById("texto2");
contenido.select();
var ets = document.execCommand("copy");
if(ets){
    alert("se copio");
}
else{
    console.log("texto no se ha copiado");
}
}