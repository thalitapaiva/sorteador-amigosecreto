let amigos = [];

function adicionarAmigo() {
    let nome = document.getElementById("amigo").value.trim();
    if (nome && !amigos.includes(nome)) {
        amigos.push(nome);
        document.getElementById("amigo").value = "";
        atualizarLista();
    } else {
        alert("⚠️ Nome inválido ou já adicionado.");
    }
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("⚠️ Adicione pelo menos um nome antes de sortear!");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let nomeSorteado = amigos[indiceSorteado];

    let resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = `O nome escolhido foi: <strong>${nomeSorteado}</strong>`;
}
