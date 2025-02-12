// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

//Funcion para agregar un amigo al array 
function agregarAmigo () {
    const imputAmigo = document.getElementById("amigo");
    const nombreAmigo = imputAmigo.value.trim();

    if (nombreAmigo === "") {
        alert("Inserte un Nombre Valido.");
        return;
    }

    amigos.push(nombreAmigo);


    actualizarLista();

//Limpiar campos
    imputAmigo.value = "";
    imputAmigo.focus();
}
//Actualizamos lista de los amigos Ingresados.
function actualizarLista() {
    const listaAmigoUl = document.getElementById("listaAmigos");
    listaAmigoUl.innerHTML = "";
    
    amigos.forEach(amigos => {
        const li =document.createElement("li");
        li.textContent = amigo;
        listaAmigoUl.appendChild("li");
    })
}
//Funcion para el sorteo del amigo Secreto.
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos registrados para sortear.");
        return;
    } 
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    const amigoSorteados = amigos[indiceAleatorio];
    
    const resultadoUl = document.getElementById("resultado");
    
    resultadoUl.innerHTML = `<li>${amigoSorteados}</li>`;

    
}
//Etiquetado de botones.
    document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("btnAdicional").addEventListener("click", agregarAmigo);
    document.getElementById("btnSortear").addEventListener("click", sortearAmigo);
});
