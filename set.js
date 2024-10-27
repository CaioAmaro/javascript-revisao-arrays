const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];
// const nomesAtualizados = new Set(nomes);
// const listaNomesAtualiazos = [...nomesAtualizados]

const listaNomesAtualizados = [...new Set (nomes)];

listaNomesAtualizados.push(10);
console.log(listaNomesAtualizados);