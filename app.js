//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. 
// Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeAmigos = [];

// Passo 2 do backlog: Função para adicionar
function adicionarAmigo() {
    // 1. Pegar o nome que o usuário digitou.
    // Dica: Use document.getElementById() com o ID do seu input.
    // Depois de pegar o elemento, como você acessa o *valor* (o texto) dentro dele?
    let nomeAmigo = document.getElementById('amigo').value;

    // 2. Adicionar esse nome ao seu array `listaDeAmigos`.
    // Dica: Qual método "empurra" um novo item para o final de um array?
    listaDeAmigos.push(nomeAmigo);

    // 3. Atualizar a lista de nomes na tela.
    // Dica: Pegue o elemento <ul> com o id 'listaAmigos' e atualize o HTML interno dele.
    let listaNoHTML = document.getElementById('listaAmigos');
    listaNoHTML.textContent = listaDeAmigos.join(', '); // Uma forma simples de exibir!

    // 4. Limpar o campo de input.
    // Dica: Como você define o valor do input de volta para uma string vazia?
    document.getElementById('amigo').value = '';
}
