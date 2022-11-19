// Me traigo los 3 botones
var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var botonCopiar = document.querySelector(".btn-copiar");

//Me trigo los tres contenedores de la derecha para poder hacer que desaparezcan
var munieco= document.querySelector(".contenedor-munieco");
var h3 = document.querySelector(".contenedor-h3");
var parrafo = document.querySelector(".contenedor-parrafo");

//
var resultado = document.getElementById("texto-resultado");

botonEncriptar.addEventListener("click", encriptar)
botonDesencriptar.addEventListener("click", desencriptar);
botonCopiar.addEventListener("click", ()=>{

    document.querySelector(".mensaje-copy").classList.add("show");
    
    copiar(elemento);
    setTimeout(()=>{
        document.querySelector(".mensaje-copy").classList.remove("show");      
        document.querySelector(".mensaje-copy").classList.remove("show");
    },2500)
}) 

function encriptar(){
    ocultarElementos();
    var area=recuperarTexto();
    resultado.textContent= encriptarTexto(area);
}
function desencriptar(){
    ocultarElementos();
    var area=recuperarTexto();
    resultado.textContent= desencriptarTexto(area);

}
const elemento=document.getElementById("texto-resultado");

function copiar(elemento){     
    
    const inputOculto= document.createElement('input');
    inputOculto.setAttribute('value', elemento.innerText);
    document.body.appendChild(inputOculto);
    inputOculto.select();
    document.execCommand("copy");
    document.body.removeChild(inputOculto);
}


function recuperarTexto(){
    var textarea = document.querySelector(".area");
    return textarea.value.toLowerCase();
    
}
 function ocultarElementos(){
    munieco.style.display="none";

    h3.style.display="none";
    parrafo.style.display="none";
 }
 function encriptarTexto(mensaje){
    // mensaje= mensaje.toLowerCase()
    var texto = mensaje;
    var textoFinal= "";
    for(var i=0; i<texto.length; i++){
        if (texto[i]== "a"){
            textoFinal= textoFinal +"ai";
        }else if(texto[i]== "e"){
            textoFinal= textoFinal +"enter";
        }else if (texto[i]== "i"){
            textoFinal= textoFinal +"imes";
        }else if (texto[i]== "o"){
            textoFinal= textoFinal +"over";
        }else if (texto[i]== "u"){
            textoFinal= textoFinal +"ufat";
        }else{
            textoFinal= textoFinal +texto[i];
        }
    }
    return textoFinal;
 }
 function desencriptarTexto(mensaje){
    // mensaje= mensaje.toLowerCase()
    var texto = mensaje;
    var textoFinal= "";
    for(var i=0; i<texto.length; i++){
        if (texto[i]== "a"){
            textoFinal= textoFinal +"a";
            i=i+1;
        }else if(texto[i]== "e"){
            textoFinal= textoFinal +"e";
            i=i+4;
        }else if (texto[i]== "i"){
            textoFinal= textoFinal +"i";
            i=i+3;
        }else if (texto[i]== "o"){
            textoFinal= textoFinal +"o";
            i=i+3;
        }else if (texto[i]== "u"){
            textoFinal= textoFinal +"u";
            i=i+3;
        }else{
            textoFinal= textoFinal +texto[i];
        }
    }
    return textoFinal;
 }




