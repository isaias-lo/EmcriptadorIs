const textArea = document.getElementById("textArea");
const mensaje = document.getElementById("mensaje");
const visible = document.getElementById("final");
const botonCopy = document.getElementById("botoncopiar");
const condicion = document.getElementById("condicion");

function botonEncriptar(){
    let esValido = true;
    for (let i = 0; i < textArea.value.length; i++) {
        let code = textArea.value.charCodeAt(i);
        if (!(code >= 97 && code <= 122) &&  // a-z 
            code !== 32) {                // espacio
            esValido = false;
            break;
        }
    }
    if (esValido){
        const textoEncriptado = encriptar(textArea.value);
        mensaje.innerText = textoEncriptado;
        if(textArea.value.length > 0){
            visible.style.display = "none";
            botonCopy.style.display = "block";
            condicion.style.display = "none";
            mensaje.style.display = "block";
        } 
        boton.disabled = true;
    }else {
        condicion.style.display = "block";
        visible.style.display = "block";
        botonCopy.style.display = "none";
        mensaje.style.display = "none";
    }
}
function botonDesencriptar(){
    let esValido = true;
    for (let i = 0; i < textArea.value.length; i++) {
        let code = textArea.value.charCodeAt(i);
        if (!(code >= 97 && code <= 122) &&  // a-z 
            code !== 32) {                // espacio
            esValido = false;
            break;
        }
    }
    if (esValido){
        const textoEncriptado = desencriptar(textArea.value);
        mensaje.innerText = textoEncriptado;
        if(textArea.value.length > 0){
            visible.style.display = "none";
            botonCopy.style.display = "block";
            condicion.style.display = "none";
            mensaje.style.display = "block";
        } 
        boton.disabled = true;
    }else {
        condicion.style.display = "block";
        visible.style.display = "block";
        botonCopy.style.display = "none";
        mensaje.style.display = "none";
    }
}

function encriptar(stringScript) {
    const lista = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringScript = stringScript.toLowerCase();

    for (let i = 0; i < lista.length; i++) {
        if(stringScript.includes(lista[i][0])){
            stringScript = stringScript.replaceAll(lista[i][0],lista[i][1]);
        }        
    }
    return stringScript;
}


function desencriptar(stringScript) {
    const lista = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringScript = stringScript.toLowerCase();

    for (let i = 0; i < lista.length; i++) {
        if(stringScript.includes(lista[i][1])){
            stringScript = stringScript.replaceAll(lista[i][1],lista[i][0])
        }        
    }
    return stringScript
}

function copy() {
    const textcopy = mensaje.innerText;
    
    navigator.clipboard.writeText(textcopy)
    .then(() => {
        alert("Texto copiado");
    })
    .catch(err => {
        console.error("Error al copiar: ", err);
    });
}