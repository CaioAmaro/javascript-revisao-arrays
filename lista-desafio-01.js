//LISTA DE DESAFIOS 01

// 1. Um array esparso é um tipo de array no qual a maioria dos elementos tem valores indefinidos. Crie um array esparso e atribua valores a alguns elementos do array (por exemplo, defina valores nos índices 1, 3 e 7). Imprima no console o array e também a informação de comprimento do array.

// const lista = [ , 1, , 3, , , , 7];
// console.log(lista);
// console.log(lista.length);

//2. Crie um programa em Node.js que inicie com um array cinco elementos e atribua um novo valor para a primeira posição (índice 0) desse array. Em seguida, exiba o array antes e depois da alteração.

// const lista = [1,2,3,4,5];
// const listaNova = [];

// for(let i=0; i<lista.length; i++){
//     listaNova[i] = lista[i];
// }

// listaNova[0] = 777;


// console.log(`Está é a lista antiga [${lista}]`);
// console.log(`Está é a lista nova [${listaNova}]`);

//3. Crie um array vazio chamado meuArray e adicione 3 números inteiros de sua escolha utilizando o método push(). Imprima no console os itens presentes no array para verificar se os números foram adicionados. Em seguida, substitua o primeiro elemento do array (índice 0) pelo dobro do seu valor atual. Imprima no console o array atualizado para verificar a mudança.

// const meuArray = [];

// meuArray.push(77, 20, 30);

// console.log(meuArray);

// meuArray[0] *= 2;

// console.log(meuArray);


//4. Desenvolva um programa em Node.js que crie um array vazio e atribua valores a ele utilizando o método push(). Adicione três números inteiros ao array e, em seguida, exiba o array resultante.

// const array = [];
// array.push(1,2,3,4,5);
// console.log(array);

//5. Desenvolva um programa em Node.js que simule uma clínica veterinária. Crie um array vazio chamado clinica que representará a fila de animais na clínica. Em um primeiro momento, simule a chegada de três animais diferentes e exiba a lista de animais no console. Após a exibição, remova os animais da lista um por vez e, por fim, exiba no console o estado final da lista.

// const clinica = [];
// clinica.push('cachorro', 'gato', 'camelo');
// console.log(clinica);
// clinica.pop();
// clinica.pop();
// clinica.pop();
// console.log(clinica);