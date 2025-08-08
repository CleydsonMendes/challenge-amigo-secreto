//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. 
// Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeAmigos = [];

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

exibirTextoNaTela('h2', 'Digite o nome dos seus amigos');

function adicionarAmigo() {
    let nomeAmigo = document.getElementById('amigo').value;
    if (nomeAmigo != '') {
            listaDeAmigos.push(nomeAmigo);
            atualizarLista();
            document.getElementById('amigo').value = '';
            exibirTextoNaTela('h2', 'Digite o nome dos seus amigos');
    } else {
        exibirTextoNaTela('h2', 'Digite um nome válido!');
    }
}

function atualizarLista() {
    let elementoLista = document.getElementById('listaAmigos');

    elementoLista.innerHTML = '';
    for (let i = 0; i < listaDeAmigos.length; i++) {
        let item = document.createElement('li');
        item.textContent = listaDeAmigos[i];
        elementoLista.appendChild(item);
    }
}

function sortearAmigo() {
    let totalDeAmigos = listaDeAmigos.length;
    if(totalDeAmigos < 2) {
        exibirTextoNaTela('h2', 'Número insuficiente de participantes!');
        return adicionarAmigo();
    } else {
        let indiceSorteado = Math.floor(Math.random() * totalDeAmigos);
        let amigoSecreto = listaDeAmigos[indiceSorteado];
        let elementoResultado = document.getElementById('resultado');
        elementoResultado.textContent = 'O amigo secreto é: ' + amigoSecreto;
    }
}
