# amigo-secreto
desafio amigo secreto alura
Amigo Secreto 🎁

Este é um projeto simples de sorteio de Amigo Secreto, desenvolvido com HTML, CSS e JavaScript. Ele permite que os usuários adicionem nomes a uma lista e realizem o sorteio de forma automática, garantindo que ninguém tire a si mesmo.

📌 Funcionalidades

Adicionar participantes: Insira nomes na lista.

Evitar nomes repetidos: Impede a inserção de um nome já adicionado.

Sortear amigos secretos: Garante que cada pessoa receba um amigo secreto diferente.

Exibir resultado: Mostra os pares sorteados na tela.

🚀 Como Usar

1️⃣ Adicionar Nomes

Digite um nome no campo de entrada.

Clique no botão "Adicionar".

O nome será incluído na lista de participantes.

2️⃣ Sortear Amigo Secreto

Após adicionar pelo menos dois participantes, clique no botão "Sortear amigo".

O sistema realizará o sorteio e exibirá os pares formados na tela.

🖥️ Exemplo de Código (JavaScript)

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
        
        sorteio = sorteio.filter(nome => nome !== sorteado);
    }

    exibirResultado(resultado);
}

📜 Tecnologias Utilizadas

HTML: Estrutura da página.

CSS: Estilização e layout.

JavaScript: Lógica do sorteio e manipulação da interface.

📌 Melhorias Futuras

Permitir a exclusão de nomes adicionados.

Exportar a lista de pares sorteados em PDF.

Criar uma animação para o sorteio.

Divirta-se sorteando seu Amigo Secreto! 🎉

