/* 

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


*/

/* Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

function calcularIMC(altura, peso) {
    let imc = peso / (altura * altura);
    return imc;
}

let alTura = prompt("Digite sua altura");
let peSo = prompt("Digite seu peso");

let resultado = calcularIMC(Number(alTura), Number(peSo))
alert(resultado);



// Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

function calcularFatorial(num) {
    if (num == 0 || num == 1) {
        return 1;
    } else {
        return num * calcularFatorial(num - 1);
    }
}

let numeroParaCalcularFatorial = Number(prompt("Digite um número"));

let resultadoFatorial = calcularFatorial(numeroParaCalcularFatorial);

alert(resultadoFatorial);


// Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

function convertor(numValor) {
    let dolarDinheiro = numValor * 4.80;
    console.log(dolarDinheiro);
}
convertor(Number(prompt('Converter qual número')));

// Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

function perimetro(altura, largura) {
    let resultado = altura * largura;
    return resultado;
}

let alturaPerimetro = Number(prompt('Digite a altura'));
let larguraPerimetro = Number(prompt('Digite a largura'));

let total = perimetro(alturaPerimetro, larguraPerimetro);
alert(total);
*/


// Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

// Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

let tabuaDa = 1;
function tabuada(num) {
    while (tabuaDa < 11) {
        let multi = num * tabuaDa;
        console.log(multi);
        tabuaDa++;    
    }   
}

tabuada(2)