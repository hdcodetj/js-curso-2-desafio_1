let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function consoleClick() {
    console.log('Você clicou console!');
}

function alertClick() {
    alert("Eu amo JS!");
}


function promptClick() {
    let cidade = prompt('Qual é o nome de sua cidade?');
    alert(`Uau, ${cidade} deve ser linda!`);

}


function somaClick() {
    let num1 = prompt("Digite um número?");
    let num2 = prompt(`Escolheu ${num1}, escolha outro número para a soma!`)
    let soma = Number(num1) + Number(num2)
    alert(`A soma de ${num1} + ${num2} é igual a ${soma}`)

}

/*
Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.

Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.

Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.

Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.

Ao clicar no botão soma, peça 2 números e exiba o resultado da soma em um alerta.

*/
