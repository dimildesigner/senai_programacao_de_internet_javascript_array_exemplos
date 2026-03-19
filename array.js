// Array é uma estrutura de dados que permite colocar vários dados
// em uma só variável. Imagine uma prateleira
// Cada elemento possui uma posição, que é o seu ÍNDICE (index)

// Criando um array de frutas:

let frutas = ["uva", "maça", "pera"];
console.log(frutas);
console.log("\n")
console.log("-------------\n");

console.log(frutas[0]); // imprime todo Array
console.log("\n");
console.log("-------------\n");

console.log(frutas[0]); // imprime elementos separados
console.log(frutas[1]);
console.log(frutas[2]);
console.log("\n");
console.log("-------------\n");

// Substituir um elemento
frutas[2] = "melancia"
console.log(frutas);
console.log("\n");
console.log("-------------\n");

// Métodos de Array
// Método .push() - Adicionar elementos ao final do array
frutas.push("abacaxi");
frutas.push("caqui");
console.log("-- Após a reforma da prateleira --");
console.log(frutas);
console.log("\n");
console.log("-------------\n");

// Método .pop() - Retirar o último elemento
frutas.pop("caqui");
console.log("-- Após a enchente, estragou os caquis --");
console.log(frutas);
console.log("\n");
console.log("-------------\n");

// Método .shift() - Retirar o primeiro elemento
frutas.shift();
console.log("-- Após goteira do teto furado, estragou as uvas --");
console.log(frutas);
console.log("\n");
console.log("-------------\n");

// Método .unshift() - Colocar novamente um elemento no início
frutas.unshift("uva");
console.log("-- Após concerto do teto, trouxe novamente as uvas --");
console.log(frutas);
console.log("\n");
console.log("-------------\n");

// Método .slice() - Para criar novo array contento parte do array original
let frutas_meio = frutas.slice(1, 3);
console.log("-- Novas frutas no meio da estante --");
console.log(frutas_meio);
console.log("\n");
console.log("-------------\n");

// Método .splice(x,y) - Removo Y elementos a partir da posição
let array = ['a', 'b', 'c', 'd'];
array.splice(2, 1); // Remove 1 elemento a partir do índice 2 ('c')
console.log("-- Exemplo .splice --");
console.log(array);  // Resultado: ['a', 'b', 'd']
console.log("\n");
console.log("-------------\n");

// Método .splice(x,y) - Remove Y elementos, a partir de sua posição inicial X
let array2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
array2.splice(5, 3); // Remove 1 elemento a partir do índice 2 ('c')
console.log("-- Novo exemplo de .splice --");
console.log(array2);  // Resultado: ['a', 'b', 'd']
console.log("\n");
console.log("-------------\n");

// Método .indexOf() - Descobre o índice de um elemento

indiceMelancia = frutas.indexOf("melancia");
console.log("-- O índice da melancia é --");
console.log(indiceMelancia);
console.log("\n");
console.log("-------------\n");

// ----------------------------------------------

// Desafio
// Crie um programa usando o array de frutas, que pergunte ao usuário
// Qual é a fruta? E o programa retorna a prateleira que ela se encontra
// Caso não tenha a fruta escolhida, o programa mostrará a mensagem
// "Fruta não encontrada!"
// Obs.: O método .indexOf() retorna -1, se a string procurada não for encnotrada

const prompt = require('prompt-sync')()

console.log("-- Quitanda Fruta Boa --\n");
frutaEscolhida = prompt("\nPeça uma fruta: ");

indice = frutas.indexOf(frutaEscolhida);

if (indice == -1){
    console.log("\nFruta não encontrada");    
}
else {
    console.log("\n" + `A fruta ${frutaEscolhida} está na prateleira ${indice}`);
}