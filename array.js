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
// Adicionar um elemento a mais ao final do array - Método .push()
frutas.push("abacaxi");
frutas.push("caqui");
console.log("-- Após a reforma da prateleira --");
console.log(frutas); 
console.log("\n");
console.log("-------------\n");