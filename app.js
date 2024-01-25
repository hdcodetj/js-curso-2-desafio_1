let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

// Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.

function consoleClick() {
    console.log('Você clicou console!');
}

// Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.

function alertClick() {
    alert("Eu amo JS!");
}

// Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.

function promptClick() {
    let cidade = prompt('Qual é o nome de sua cidade?');
    alert(`Uau, ${cidade} deve ser linda!`);
}

// Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.


function somaClick() {
    let num1 = prompt("Digite um número?");
    let num2 = prompt(`Escolheu ${num1}, escolha outro número para a soma!`);
    let soma = Number(num1) + Number(num2)
    alert(`A soma de ${num1} + ${num2} é igual a ${soma}`);
}

// Ao clicar no botão soma, peça 2 números e exiba o resultado da soma em um alerta.

// Criar uma função que exibe "Olá, mundo!" no console.

function olaMundo() {
    console.log("Olá Mundo!");
}
olaMundo()

// Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

function testeNovo(nome) {
    console.log(`Olá ${nome} é um prazer!`);    
}
testeNovo("Hélio");

// Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

function numDobro(num1) {
    let dobro = Number(num1) * 2;
    console.log(`O dobro de ${num1} é ${dobro}`);
}
numDobro(3);

// Criar uma função que recebe três números como parâmetros e retorna a média deles.

function mediaNumero(num1, num2, num3) {
    let media = (Number(num1) + Number(num2) +Number(num3)) / 3;
    console.log(`A média de ${num1} + ${num2} + ${num3} vezes 3 é: ${media}`);
}

mediaNumero(5, 5 , 5);
// Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

function numMaior(num1, num2) {
    if (num1 > num2) {
        console.log(`O número ${num1} é maior do que o número ${num2}`);
    } else {
        console.log(`O número ${num2} é maior do que o número ${num1}`);
    }
}

numMaior(3, 5);

// Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo

function multiNum(num1) {
    let multiplica = Number(num1) * Number(num1);
    console.log(`A multiplicação de ${num1} por ele mesmo fica: ${multiplica}.`)
}

multiNum(10)
