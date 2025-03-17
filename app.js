// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
document.addEventListener("DOMContentLoaded", () => {
    function agregarAmigo() {
        const input = document.getElementById("amigo");
        const nombre = input.value.trim();
        if (!nombre) {
            alert("Por favor, escribe un nombre antes de añadir.");
            return;
        }
        const lista = document.getElementById("listaAmigos");
        const nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = nombre;
        lista.appendChild(nuevoElemento);
        input.value = "";
        input.focus();
    }

    function sortearAmigo() {
        const lista = document.getElementById("listaAmigos");
        const amigos = Array.from(lista.children).map(li => li.textContent);

        if (amigos.length === 0) {
            alert("No hay nombres en la lista para sortear.");
            return;
        }

        const nombreSorteado = amigos[Math.floor(Math.random() * amigos.length)];
        
        // Limpiar la lista y mostrar solo el nombre sorteado
        lista.innerHTML = "";
        const resultado = document.getElementById("resultado");
        resultado.innerHTML = `<li class="sorteado">🎉 ${nombreSorteado} es el amigo secreto! 🎉</li>`;
    }

    // Hacer las funciones accesibles desde el HTML
    window.agregarAmigo = agregarAmigo;
    window.sortearAmigo = sortearAmigo;
});
