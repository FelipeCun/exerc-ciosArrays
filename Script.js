//Faça um programa, seguindo os passos:    
//a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`  
//b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
//c) Imprima o array no console
//d) Peça ao usuário que digite o *índice* de uma tarefa que ele já realizou: 0, 1 ou 2 
//e) Remova da lista o item de índice que o usuário escolheu.
//f) Imprima o array no console

//Definição de lista de tarefas;
/*let listaDeTarefas = [
    prompt("Cite uma tarefa que você faça durante a manhã: "),
    prompt("Cite uma tarefa que você faça durante a tarde: "),
    prompt("Cite uma tarefa que você faça durante a noite: ")
];

//Imprima o array no console
alert("Suas tarefas diárias são " + listaDeTarefas.join(', ') + ".");

//Peça ao usuário que digite o *índice* de uma tarefa que ele já realizou: 0, 1 ou 2;
let indice = prompt("Digite de 0 a 2, a tarefa que já realizou: ");

//Remova da lista o item de índice que o usuário escolheu;
console.log(listaDeTarefas.splice(indice, 1));

//Imprima o array no console.
alert("Você ainda não completou as tarefas " + listaDeTarefas.join(', ') + ".");*/



//Faça um programa que pergunte ao usuario seu nome e e=mail. Em seguida, imprima no console a seguinte mensagem.
//O e-mail 'emailDoUsuario' foi cadastrado com sucesso.
//Seja bem vinda(o), 'nomeDoUsuario'!

/*let nome = prompt("Qual é o seu nome? ");
let email = prompt("informe o seu e-mail: ");

alert("O e-mail " + email + " foi cadastrado com sucesso." + "\n\nSeja bem vindo " + nome + "!");*/



//1. Receba uma frase e retorne um array onde cada elemento é uma das palavras da frase, ignorando os espaços

/*let frase = prompt("Escreva a frase do dia: ")

let palavras = frase.split(' ');
alert(palavras);*/



//2. Dado o array `["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]`, faça um programa que acha o índice da palavra Abacaxi e imprime tanto o índice quanto o tamanho do array

/*let frutas = [("As frutas preferidas de Diego são: ") + "Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"];
alert(frutas.join(', ') + ".");

alert("O índice da fruta preferida de Diego é " + frutas.indexOf("Abacaxi") + "." + 
"\n\nA palavra " + frutas[2] + " possui " + frutas[2].length + " letras." + 
"\n\nE a fruta que Diego mais gosta é o " + frutas[2] + ".");*/



//3. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:

//a) Imprima no console o array completo  
//b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, *uma embaixo da outra*.
//c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no console a nova lista.



//4. Crie um script que pergunte 3 números ao usuário, coloque em um array, depois exiba tal array.

//a)Modifique os elementos do array de modo a a sequência de números ficar do contrário.
//b)Ou seja, se digitou: 1,2,3
//c)Vai aparecer: 3,2,1