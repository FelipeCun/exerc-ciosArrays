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


let Array
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

