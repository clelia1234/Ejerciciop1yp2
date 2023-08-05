const nombreUI = document.querySelector("#nombre");
const telefonoUI = document.querySelector("#telefono");
const precioUI = document.querySelector("#precio");
const enviarBTN = document.querySelector("#btn");
const mostrar = document.querySelector("#mostrar");

enviarBTN.addEventListener("click",agregar)

function agregar(event){
    event.preventDefault();
    const objeto ={
        nombre: nombreUI.value,
        telefono: telefonoUI.value,
        precio: precioUI.value, 

    }
    datos = JSON.parse(localStorage.getItem("valores"));
    if (datos ==null){
        datos = []
    }
}

