// 1)    
// Escreva um programa que exiba os números de 1 a
// 10 utilizando um laço "for".

function exercicio1() {
    for (let i = 1; i <= 10; i++) {
        console.log(i)
    }
}

// 2)    
// Escreva um programa que solicite ao usuário um
// número e exiba todos os números pares de 0 até esse número utilizando um laço
// "for".



function exercicio2() {

    let numeroPar = document.getElementById('Exercicio2').value;
    for (let i = 0; i <= numeroPar; i += 2) {
        console.log(i)
    }
}

// 3)
// Escreva um programa que solicite ao usuário um
// número e verifique se ele é um número primo utilizando um laço "for"
// e um condicional "if-else".

function exercicio3() {
    let numeroPrimo = document.getElementById('Exercicio3').value;

    if (numeroPrimo == 2) {
        console.log('É um número primo')
    }

    else {

        for (let i = 2; i <= numeroPrimo; i++) {

            if (numeroPrimo % i == 0) {
                console.log('Não é primo')
                break
            }

            else {
                console.log('É um número primo')
                break
            }

        }
    }

}

// 4)
// Escreva um programa que solicite ao usuário um
// número e exiba a tabuada desse número utilizando um laço "for".

function exercicio4() {
    let numeroTabuada = document.getElementById('Exercicio4').value;

    for (let i = 0; i <= 10; i++) {
        console.log(numeroTabuada, 'x', i, '=', numeroTabuada * i)
    }
}

// 5)
// Escreva um programa que solicite ao usuário um
// número e exiba todos os números ímpares de 0 até esse número utilizando um laço
// "while".

function exercicio5() {

    let numeroImpar = document.getElementById('Exercicio5').value;

    let i = 1;

    while (i <= numeroImpar) {

        let numeroResultante = i % 2;

        if (numeroResultante != 0) {
        }

        i++
    }
}

// 6)    
// Escreva um programa que solicite ao usuário um
// número e exiba a soma de todos os números pares de 0 até esse número utilizando
// um laço "while".

function exercicio6() {

    let numeroPar2 = document.getElementById('Exercicio6').value;
    let i = 1;
    let somatorio = 0;

    while (i <= numeroPar2) {
        if (i % 2 == 0) {
            somatorio += i

        }

        i++
    }
    document.getElementById('exc6').innerHTML = somatorio
}


// 7)    
// Escreva um programa que exiba os números de 10 a
// 1 em ordem decrescente utilizando um laço "while".

function exercicio7() {
    let i = 10;

    while (i >= 1) {
        console.log(i)

        i--
    }
}


// 8)    
// Escreva um programa que solicite ao usuário uma
// palavra e verifique se ela é um palíndromo utilizando um laço "for" e
// um condicional "if-else".

function exercicio8() {
    let palavra = document.getElementById('Exercicio8').value;
    let inversa = '';

    for (let i = 1; i <= palavra.length; i++) {
        inversa = inversa + palavra.charAt(palavra.length - i)
    }

    if (palavra == inversa) {
        console.log('A palavra é um palíndromo')
    }

    else {
        console.log('A palavra não é um palíndromo')
    }
}


// 9)
// Escreva um programa que exiba a soma dos números
// de 1 a 100 utilizando um laço "for".

function exercicio9() {

    somatorio100 = 0

    for (let i = 0; i <= 100; i++) {
        somatorio100 = somatorio100 + i
    }

    document.getElementById('exc9').innerHTML = somatorio100
}

// 10)  Escreva
// um programa que exiba a média de uma lista de números digitados pelo usuário
// utilizando um laço "while".

function exercicio10() {
    let numero = parseInt(prompt("Digite um Numero (Zero Para Sair):"));
    let soma = 0;
    let cont = 0;
    let media = 0;
    while(numero != 0){
        soma = soma + numero;
        cont = cont + 1;
        numero = parseInt(prompt("Digite um Numero (Zero Para Sair):"));
    }
    media = soma / cont;
    alert(media)
}

// 11)  Escreva
// um programa que exiba todos os múltiplos de 3 de 1 a 100 utilizando um laço
// "for".

function exercicio11() {
    for (let i = 0; i <= 100; i++) {

        if (i % 3 == 0) {
            console.log(i)
        }
    }
}


// 12)  Escreva
// um programa que solicite ao usuário um número e exiba a soma dos dígitos desse
// número utilizando um laço "for".

function exercicio12() {
    let numero = document.getElementById('Exercicio12').value;
    let somaDigito = 0;

    for (let i = 0; i < numero.length; i++) {
        
        somaDigito += parseInt(numero[i])
    }

    document.getElementById('exc12').innerHTML = somaDigito;
}


// 13)  Escreva
// um programa que exiba todos os números primos entre dois números digitados pelo
// usuário utilizando um laço "for" e um condicional
// "if-else".


// 14)  Escreva
// um programa que exiba que calcule a área de um retângulo com lados informados
// pelo usuário.

function exercicio14 () {
    let baseRetangulo = parseInt(document.getElementById('BaseRetangulo').value);
    let alturaRetangulo =parseInt(document.getElementById('AlturaRetangulo').value);
    var area = baseRetangulo*alturaRetangulo;

    document.getElementById('exc14').innerHTML = area;
}

// 15)  Escreva
// um programa que solicite as letras de uma palavra informada pelo usuário,
// armazene em um vetor, e através de um laço mostre quais letras são vogais e quais
// são consoantes.



// 16)  Escreva
// um programa que calcule a área de um círculo, solicitando o raio ao usuário.

function exercicio16 () {
    let raio = parseInt(document.getElementById('raio').value);
    let pi =Math.PI;
    var areaCirculo = pi*raio**2;

    document.getElementById('exc16').innerHTML = areaCirculo.toFixed(2);
}


// 17)  Escreva
// um programa que calcule a área de um triângulo, solicitando a base e a altura
// ao usuário.

function exercicio17 () {
    let baseTriangulo = parseInt(document.getElementById('baseTriangulo').value);
    let alturaTriangulo = parseInt(document.getElementById('alturaTriangulo').value);
    let areaTriangulo = (baseTriangulo*alturaTriangulo)/2;

    document.getElementById('exc17').innerHTML = areaTriangulo;
}

// 18)  Escreva
// um programa que calcule a área de um trapézio, solicitando a base maior, a base
// menor e a altura ao usuário.


function exercicio18 () {
    let baseMaior = parseInt(document.getElementById('BaseMaior').value);
    let baseMenor =parseInt(document.getElementById('BaseMenor').value);
    let altura = parseInt(document.getElementById('Altura').value);
    var area = ((baseMaior+baseMenor)/2)*altura;

    document.getElementById('exc18').innerHTML = area;
}

// 19)  Escreva
// um programa que substitua todas as ocorrências de uma letra em uma frase
// digitada pelo usuário por um asterisco (*).


// 20)  Escreva
// um programa que inverta uma frase digitada pelo usuário.

// 21)  Escreva
// um programa que remova os espaços em branco de uma frase digitada pelo usuário.


// 22)  Escreva
// um programa que verifique se uma frase digitada pelo usuário é um pangrama
// (contém todas as letras do alfabeto).


// 23)  Escreva
// um programa que conte quantas vezes uma determinada palavra aparece em uma
// frase digitada pelo usuário.


// 24)  Escreva
// um programa que converta uma frase digitada pelo usuário para o formato
// "Title Case" (cada palavra com a primeira letra maiúscula).


// 25)  Escreva
// um programa que verifique se uma frase digitada pelo usuário é um tautograma
// (todas as palavras começam com a mesma letra).
