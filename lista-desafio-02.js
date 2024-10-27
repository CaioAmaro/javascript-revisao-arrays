//LISTA DESAFIO 2

//1 - Crie uma função que receba dois arrays e os concatene em um único array.
// const primeiraArray = [1, 2, 3];
// const segundaArray = [4, 5, 6];

// const concatenarArrays = (array1, array2) => {
//     return array1.concat(array2);
// }

// const arrayConcatenada = concatenarArrays(primeiraArray, segundaArray);

// console.log(arrayConcatenada);

//2 - Crie um array chamado numeros contendo números de 1 a 10. Utilize o método slice para criar um novo array chamado parteNumeros que contenha apenas os números de índice 3 a 7 de numeros.

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const parteNumeros = numeros.slice(3, 7);

// console.log(parteNumeros);

//3 - Dado o array frutas contendo frutas que desejamos comprar na feira:
// const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi']
// Utilize o método splice para remover as frutas no índice 2 e 3 e, em seguida, adicione as frutas 'Kiwi' e 'Pêssego' nesses mesmos índices.

// const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi'];
// frutas.splice(2, 2, 'Kiwi', 'Pêssego');

// console.log(frutas);

//4 - Crie dois arrays chamados menuPrincipal e menuDeSobremesas contendo opções do cardápio de um restaurante. Utilize o método concat para criar um novo array menuCompleto contendo todos os elementos de menuPrincipal seguidos pelos elementos de menuDeSobremesas.
// const menuPrincipal = ['Sopa', 'Churrasco', 'Carne Moída', 'Galinha Guizado'];
// const menuSobremesa = ['Pudim', 'Bolo', 'Sorvete'];
// const menuCompleto = menuPrincipal.concat(menuSobremesa);

// console.log(`Menu Principal: [${menuPrincipal}]`);
// // console.log(`Menu Sobremesas: [${menuSobremesa}]`);
// // console.log(`Menu Completo: [${menuCompleto}]`);

// //5 - Crie uma lista bidimensional com 3 linhas e 3 colunas, onde cada elemento seja uma matriz 3x3 com valores iniciando em 1 e aumentando em 1 a cada elemento.

// const matriz = [];
// let contador = 1;

// for(let i=0; i<3; i++){
//     let linhas = [];
//     for(let j=0; j<3; j++){
//         linhas.push(contador);
//         contador++;
//     }
//     matriz.push(linhas);
// }

// // console.log(matriz);

// //6 - Acesse e imprima o elemento na segunda linha e terceira coluna da lista bidimensional matriz criada no exercício anterior.
// console.log(matriz[2][1]);

// //7 - Adicione um novo elemento (por exemplo,15) na terceira linha e segunda coluna da lista bidimensional matriz criada anteriormente.
// matriz[1].splice(2,1,15);




