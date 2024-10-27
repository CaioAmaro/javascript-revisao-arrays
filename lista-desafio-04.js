//LISTA DE DESAFIO 4

//1. Utilize o método forEach para imprimir cada elemento de um array juntamente com seu índice.
// const array = [1,2,3,4,5,6,7,8,9,10];
// array.forEach((numero, i) => console.log(`[${i}] -> ${numero}`));

//2 - Crie uma função chamada executaOperacaoEmArray que recebe dois parâmetros: um array e uma função de callback que executa alguma operação matemática. Essa função deve iterar por cada elemento do array e aplicar a função de callback em cada um dos elementos, imprimindo o resultado da operação no console.
// const arrayQualquer = [1,2,3,4,5];

// const executaOperacaoEmArray = (array, funcaoCallBack) => {
//     return array.map(funcaoCallBack);
// }

// const triplicarNumero = (num) => {
//     return num*3;
// }

// const arrayTriplicada = executaOperacaoEmArray(arrayQualquer, triplicarNumero);

// console.log(arrayTriplicada);

//3. Você recebeu um array numeros contendo valores numéricos. Crie um programa que verifique se um número específico está presente nesse array. Se estiver, o programa deve retornar a posição (índice) desse número. Caso contrário, se o número não estiver presente, o programa deve retornar "-1".

// const arrayNumeros = [1,4,63,23,52,34,2,67];

// const procurarNumero = (numero, array) =>{
//     for (let i=0; i<array.length; i++){
//         if(array[i] === numero){
//             return `O numero ${numero} foi achado no indice [${i}]`;
//         }
//     }
//     return -1;
// };

// console.log(procurarNumero(67, arrayNumeros));

//4. Você recebeu dois arrays de nomes contendo os alunos da Turma A e da Turma B. Utilize o método concat() para unir os arrays das turmas A e B em um único array chamado todasAsTurmas. Depois, utilize o método find() para buscar um aluno específico pelo nome no array todosAlunos. Exiba no console uma mensagem informando o nome do aluno procurado; caso não exista na lista, retorne uma mensagem de aviso, por exemplo Aluno não encontrado.

// const nomesTurmaA = ['João Silva','Maria Santos','Pedro Almeida'];
// const nomesTurmaB = ['Carlos Oliveira','Ana Souza','Lucas Fernandes'];
// const todasTurmas = nomesTurmaA.concat(nomesTurmaB);

// const nomeProcurado = todasTurmas.find((nome) => nome === 'Carlos Oliveir');

// if (nomeProcurado){
//     console.log('Aluno encontrado.');
// }else{
//     console.log('Aluno Não encontrado.');
// }

//5.  Considere um array de números inteiros. Utilize o método forEach() para multiplicar cada elemento do array por 3 e exibir no console o resultado de cada multiplicação. Depois, utilize o método findIndex() para encontrar o índice do número 18 no array original.

// const numeros = [6, 9, 12, 15, 18, 21];
// numeros.forEach((numero) => console.log(`${numero} x 3 = ${numero*3}`));
// const numeroProcurado = numeros.findIndex((numero) => numero === 18);

// console.log(`O numero procurado está no indice[${numeroProcurado}]`);

