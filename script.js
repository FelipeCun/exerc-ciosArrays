//const letras = ["A", "B", "C", "D", "E", "F", "G", "H"]
// índices (i)   0    1    2    3    4    5    6    7


//letras.splice(2, 1) 
//       letras = ["A", "B", "D", "E", "F", "G", "H"]
// índices (i)      0    1    2    3    4    5    6  


//letras.splice(3, 2) // letras = ["A", "B", "D", "G", "H"]

const valores = [1,2,3,4,5,6];

//Determine o tamanho do Array.
alert(valores.length);

//Adicionar o número 7.
alert(valores.push(7));

//Remova os números 4 e 5.
alert(valores.splice(3,2));
alert(valores);

alert(valores.length);

