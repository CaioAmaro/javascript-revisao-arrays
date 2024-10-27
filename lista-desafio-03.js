//LISTA DESAFIO 3

//1. Escreva um código que utilize o loop for/of para iterar e imprimir cada elemento de um array.
// const array = [1, 2, 3, 4, 5];

// for( let i=0; i<array.length; i++){
//     console.log(array[i]);
// }

//2. Crie uma função que receba uma array e imprima no console o número do índice e o elemento.
// const arrayTeste = [1, 2, 3, 4, 5];

// const mostrarIndiceEElemento = (array) =>{
//     console.log('teste');
//     for (let i=0; i<array.length; i++){
//         console.log(
//             `[${i}] -> ${array[i]}`
//         );
//     }
// }

//3. Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos.
// const arrayDeNumero = [100, 50, 30, 20];
// let somaNumeros = 0;

// for(let numero of arrayDeNumero){
//     somaNumeros += numero;
// }

// console.log(somaNumeros);

//4. Crie uma função que receba uma array de números inteiros e retorne o menor valor e o maior valor da array, no seguinte formato: 'o menor número é X e o maior número é Y'.

// const arrayDeNumeros = [4, 66, 33, 22, 540, 23, 21, 20, 77];

// const maiorEMenor = (array) => {
//     let maior = array[0];
//     let menor = array[0];

//     for (let i=0 ; i<array.length; i++){
//         if(array[i] > maior){
//             maior = array[i];
//         }

//         if(array[i] < menor){
//             menor = array[i];
//         }
//     }

//     console.log(`O maior Valor encontrado é ${maior} e o menor valor ${menor}`);
// }

// maiorEMenor(arrayDeNumeros);


//5. Crie um programa que utilize um laço for para percorrer uma array const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14] e exibir no console apenas os números pares contidos nesse array.

// const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];

// for( numero of numeros){
//     if( numero%2 === 0){
//         console.log(numero);
//     }
// }

//6. Crie um programa que calcule a média dos números presentes em um array utilizando um loop for.
// const numeros = [4,10,23,4,50,23];
// let somaDosNumeros = 0;

// for(numero of numeros){
//     somaDosNumeros += numero;
// }

// let media = somaDosNumeros / numeros.length;

// console.log(`A média é ${media}`);


