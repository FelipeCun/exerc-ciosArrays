//const letras = ["A", "B", "C", "D", "E", "F", "G", "H"]
// índices (i)   0    1    2    3    4    5    6    7


//letras.splice(2, 1) 
//       letras = ["A", "B", "D", "E", "F", "G", "H"]
// índices (i)      0    1    2    3    4    5    6  


//letras.splice(3, 2) // letras = ["A", "B", "D", "G", "H"]

//const valores = [1,2,3,4,5,6];

//Determine o tamanho do Array.
//alert(valores.length);

//Adicionar o número 7.
//alert(valores.push(7));

//Remova os números 4 e 5.
//alert(valores.splice(3,2));
//alert(valores);

//alert(valores.length);


/*let Array
console.log('a. ', Array); //a.  undefined

Array = null
console.log('b. ', Array); //b.  null

Array = [3,4,5,6,7,8,9,10,11,12,13]
console.log('c. ', Array.length); //c.  11

let i = 0 
console.log('d. ', Array[i]); //d.  3

Array[i+1] = 19;
console.log('e. ', Array); //(11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = Array[i+6];
console.log('f. ', valor);

const frase = prompt("Digite uma Frase: ");
console.log(frase.toUpperCase().replaceAll("A", "I"),frase.length);*/


//Faça um programa que pergunte ao usuario seu nome e e=mail. Em seguida, imprima no console a seguinte mensagem.
//O e-mail 'emailDoUsuario' foi cadastrado com sucesso.
//Seja bem vinda(o), 'nomeDoUsuario'!

/*let nomeDoUsuario = prompt("Qual é o seu nome? ");
let emailDoUsuario = prompt("Insira seu e-mail? ");

alert("O e-mail " + emailDoUsuario + " foi cadastrado com sucesso." + "\n\nSeja bem vinda(o), " + nomeDoUsuario + "!");*/


//Faça um programa, seguindo os passos:    
//a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`  
//b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
//c) Imprima o array no console
//d) Peça ao usuário que digite o *índice* de uma tarefa que ele já realizou: 0, 1 ou 2 
//e) Remova da lista o item de índice que o usuário escolheu.
//f) Imprima o array no console

/*let listaDeTarefas = [];
listaDeTarefas = prompt("Cite a primeira tarefa do seu dia: ");
listaDeTarefas = prompt("Cite a segunda tarefa do seu dia: ");
listaDeTarefas = prompt("Cite a terceira tarefa do seu dia: ");

console.log(listaDeTarefas);

let indice = prompt("Digite o número 0,1 ou 2 de sua tarefa do dia já realizada: ");
listaDeTarefas.splice(indice);
console.log(listaDeTarefas);*/



//1. Receba uma frase e retorne um array onde cada elemento é uma das palavras da frase, ignorando os espaços

//2. Dado o array `["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]`, faça um programa que acha o índice da palavra Abacaxi e imprime tanto o índice quanto o tamanho do array

//3. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
    
//a) Imprima no console o array completo  
//b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, *uma embaixo da outra*.
//c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no console a nova lista

//4. Crie um script que pergunte 3 números ao usuário, coloque em um array, depois exiba tal array.

//a)Modifique os elementos do array de modo a a sequência de números ficar do contrário.
//b)Ou seja, se digitou: 1,2,3
//c)Vai aparecer: 3,2,1