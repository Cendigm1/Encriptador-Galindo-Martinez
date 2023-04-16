function encriptar(texto){
    texto=texto.replace(/e/g, "enter");
    texto=texto.replace(/i/g, "imes");
    texto=texto.replace(/a/g, "ai");
    texto=texto.replace(/o/g, "ober");
    texto=texto.replace(/u/g, "ufat");
    return texto;
}
function encriptando(){
    let textoOrigen = document.getElementById("textoOrigen").value;
    let textoDestino = encriptar(textoOrigen);
    document.getElementById("textoDestino").value=textoDestino;
}
function desencriptar(texto){
    texto=texto.replace(/imes/g, "i");
    texto=texto.replace(/enter/g, "e");
    texto=texto.replace(/ai/g, "a");
    texto=texto.replace(/ober/g, "o");
    texto=texto.replace(/ufat/g, "u");
    return texto;
}
function desencriptando(){
    let textoOrigen = document.getElementById("textoOrigen").value;
    let textoDestino = desencriptar(textoOrigen);
    document.getElementById("textoDestino").value=textoDestino;
}