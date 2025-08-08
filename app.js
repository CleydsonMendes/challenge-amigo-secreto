//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. 
// Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeAmigos = [];

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemTela() {
    exibirTextoNaTela('h2', 'Digite o nome dos seus amigos');
    exibirTextoNaTela('h2', 'Digite um nome válido!');
}

exibirMensagemTela();

function adicionarAmigo() {
    let nomeAmigo = document.getElementById('amigo').value;
    if (nomeAmigo != '') {
            listaDeAmigos.push(nomeAmigo);
            let listaNoHTML = document.getElementById('listaAmigos');
            listaNoHTML.textContent = listaDeAmigos.join(', ');
            document.getElementById('amigo').value = '';
            exibirTextoNaTela('h2', 'Digite o nome dos seus amigos');
    } else {
        exibirTextoNaTela('h2', 'Digite um nome válido!');
    }
}

function sortearAmigo() {
    let totalDeAmigos = listaDeAmigos.length;
    let indiceSorteado = Math.floor(Math.random() * totalDeAmigos);
    let amigoSecreto = listaDeAmigos[indiceSorteado];
    let elementoResultado = document.getElementById('resultado');
    elementoResultado.textContent = 'O amigo secreto é: ' + amigoSecreto;
}
