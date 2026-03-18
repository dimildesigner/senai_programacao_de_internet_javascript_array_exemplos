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
// Adicionar elementos ao final do array - Método .push()
frutas.push("abacaxi");
frutas.push("caqui");
console.log("-- Após a reforma da prateleira --");
console.log(frutas); 
console.log("\n");
console.log("-------------\n");

// Retirar o último elemento - Método .pop()
frutas.pop("caqui");
console.log("-- Após a enchente, estragou os caquis --");
console.log(frutas); 
console.log("\n");
console.log("-------------\n");

// Retirar o primeiro elemento - Método .shift()
frutas.shift();
console.log("-- Após goteira do teto furado, estragou as uvas --");
console.log(frutas); 
console.log("\n");
console.log("-------------\n");

// Colocar novamente um elemento no início - Método .unshift()
frutas.unshift("uva");
console.log("-- Após concerto do teto, trouxe novamente as uvas --");
console.log(frutas); 
console.log("\n");
console.log("-------------\n");

// Para criar novo array contento parte do array original - Método .slice()
let frutas_meio = frutas.slice(1,3);
console.log("-- Novas frutas no meio da estante --");
console.log(frutas_meio); 
console.log("\n");
console.log("-------------\n");

// Removo Y elementos a partir da posição - Método .splice(x,y)
let array = ['a', 'b', 'c', 'd'];
array.splice(2,1); // Remove 1 elemento a partir do índice 2 ('c')
console.log("-- Exemplo Splice --");
console.log(array);  // Resultado: ['a', 'b', 'd']
console.log("\n");
console.log("-------------\n");

// Removo X elementos, a partir de sua posição inicial Y - Método .splice(x,y)
let array2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
array2.splice(5,4); // Remove 1 elemento a partir do índice 2 ('c')
console.log("-- Novo exemplo de .splice --");
console.log(array2);  // Resultado: ['a', 'b', 'd']
console.log("\n");
console.log("-------------\n");