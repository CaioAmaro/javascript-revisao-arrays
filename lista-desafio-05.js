//LISTA DE DESAFIOS 5

// 1 - Faça uma função que aceite vários arrays como argumentos e retorne um único array contendo todos os elementos dos arrays fornecidos, utilizando Spread Operator.
// Dica: é possível usar o spread operator diretamente em um parâmetro de função para "espalhar" seu conteúdo, por exemplo function funcaoExemplo(...params).

// const primeiroArray = [1, 2, 3];
// const segundoArray = [4, 5, 6];
// const terceiroArray = [7, 8, 9];

// function juntarArrays (array1, array2, array3){
//     return [...array1,...array2,...array3];
// }

// const arraysJuntadas = juntarArrays(primeiroArray, segundoArray, terceiroArray);

// console.log(arraysJuntadas);

//2 - Crie um array de números chamado valores. Depois,escreva um programa que some todos os elementos deste array utilizando o método reduce.
// const valores = [1, 2, 3, 4, 5];

// const somaDosValores = valores.reduce((acumulador, valor) => {
//     return acumulador+valor;
// }, 0);

// console.log(somaDosValores);

//3 - Considere duas listas de cores: Crie um programa que una essas duas listas, removendo cores duplicadas e exiba a lista final.
// const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho']
// const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul']

// const listaCoresCompletas = [...new Set(coresLista1), ...new Set(coresLista2)];

// console.log(listaCoresCompletas);

//4 - Escreva uma função que receba um array de números e retorne um array contendo apenas os números pares.
// const valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const valoresPares = valores.filter((valor) => valor%2 === 0);

// console.log(valoresPares);

//5 - Crie uma função que filtre os números de um array que são múltiplos de 3 e maiores que 5.
// const valores = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

// const valoresFiltrados = valores.filter((valor) => {
//     return (valor%3===0) && (valor > 5);
// });

// console.log(valoresFiltrados);

//6 - Crie uma função que receba um array de números e retorne a soma de todos os elementos.
// const numeros = [1, 5, 4, 10];

// const numerosSomados = numeros.reduce((acumulador, numero) => {
//     return acumulador+numero;
// }, 0);

// console.log(numerosSomados);
