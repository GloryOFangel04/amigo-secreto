const amigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome === "") {
        alert("Digite um nome antes de adicionar!");
        return;
    }

    if (amigos.includes(nome)) {
        alert("Esse nome já foi adicionado!");
        return;
    }

    amigos.push(nome);
    atualizarLista();
    input.value = ""; 
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach(nome => {
        const li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois nomes para sortear!");
        return;
    }

    let sorteio = [...amigos];
    let resultado = [];
    
    for (let i = 0; i < amigos.length; i++) {
        let disponiveis = sorteio.filter(nome => nome !== amigos[i]);
        
        if (disponiveis.length === 0) {
            alert("Não foi possível sortear sem repetição. Tente novamente!");
            return;
        }

        let sorteado = disponiveis[Math.floor(Math.random() * disponiveis.length)];
        resultado.push(`${amigos[i]} → ${sorteado}`);
        
        
        gl
        sorteio = sorteio.filter(nome => nome !== sorteado);
    }

    exibirResultado(resultado);
}

function exibirResultado(lista) {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    lista.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        resultado.appendChild(li);
    });
}
