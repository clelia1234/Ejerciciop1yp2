const nombreUI = document.querySelector("#nombre");
const telefonoUI = document.querySelector("#telefono");
const correoUI = document.querySelector("#correo");
const consultaUI = document.querySelector("#consulta");
const enviarBTN = document.querySelector("#btn");
const mostrar = document.querySelector(".mostrar");
const formulario = document.querySelector("#formulario");

enviarBTN.addEventListener("click", agregar);
document.addEventListener("DOMContentLoaded", pintar);

function agregar(event) {
    event.preventDefault();
    const objeto = {
        nombre: nombreUI.value,
        telefono: telefonoUI.value,
        correo: correoUI.value, 
        consulta: consultaUI.value,

    }
    datos = JSON.parse(localStorage.getItem("valores"));
    if (datos == null){
        datos = []
    }

    datos.push(objeto);
    localStorage.setItem("valores", JSON.stringify(datos));

  
formulario.reset(); 
  
pintar()

}

function pintar(){
    datos = JSON.parse(localStorage.getItem("valores"));
    mostrar.innerHTML = datos
    .map((dato, index) => {
        return `
        <div class="card">
        <h3>${dato.nombre}</h3>
        <h3>${dato.telefono}</h3>
        <h3>${dato.correo}</h3>
        <h3>${dato.consulta}</h3>
        <button onClick="editar(${index})">editar</button>
        <button onClick="borrar(${index})">borrar</button>
        </div>
        `;
        })
        .join("");
}

function editar(index){
const nombreEdit = prompt("edita el nombre", datos[index].nombre)
datos[index].nombre =nombreEdit;

const telefonoEdit = prompt("edita el telefono", datos[index].telefono)
datos[index].telefono =telefonoEdit;

const correoEdit = prompt("edita el correo", datos[index].correo)
datos[index].correo =correoEdit;

const consultaEdit = prompt("edita el consulta", datos[index].consulta)
datos[index].consulta =consultaEdit;

localStorage.setItem("valores",JSON.stringify(datos))

pintar()

}

function borrar(index){
    datos.splice(index,1);
    localStorage.setItem("valores", JSON.stringify(datos));

    pintar()
}
