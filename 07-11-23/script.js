/* 1° Esercizio */

// Creo le 4 funzioni con le rispettive operationi matematiche
const mySum = (numOne, numTwo, numThree) => numOne + numTwo + numThree;
const mySub = (numOne, numTwo, numThree) => numOne - numTwo - numThree;
const myMul = (numOne, numTwo, numThree) => numOne * numTwo * numThree;
const myDiv = (numOne, numTwo, numThree) => numOne / numTwo / numThree;

// Creo una funzione per la callback
function myCalculator(fun) {
  return fun(10, 5, 2);
}

// Stampo in console la funzione myCalculator
console.log(myCalculator(myMul));

/* ********************* */

/* 2° Esercizio */

const myCart = [
  {
    id: 1,
    name: "Sugo alla Siciliana",
    urlImg:
      "https://www.convivia.it/wp-content/uploads/2023/04/Sugo-pronto-alla-siciliana.jpg",
    description: "Sugo alla Siciliana Biologico pronto da gustare",
  },

  {
    id: 2,
    name: "Sugo alla Mediterranea",
    urlImg:
      "https://www.convivia.it/wp-content/uploads/2023/04/sugo-pronto-alla-mediterranea.jpg",
    description: "Sugo alla Mediterranea Biologico pronto da gustare",
  },

  {
    id: 3,
    name: "Sugo alla Norma",
    urlImg:
      "https://www.convivia.it/wp-content/uploads/2023/04/sugo-pronto-alla-norma.jpg",
    description: "Sugo alla Norma Biologico pronto da gustare",
  },

  {
    id: 4,
    name: "Sugo alla Palermitana",
    urlImg:
      "https://www.convivia.it/wp-content/uploads/2023/04/sugo-pronto-alla-palermitana.jpg",
    description: "Sugo alla Palermitana Biologico pronto da gustare",
  },
];

/* Il metodo forEach serve per iterare tutti gli elementi di un array ma 
restituisce come valore undefined*/
const forEachResult = myCart.forEach((product) => product);
console.log(forEachResult);

/*Il metodo map serve per iterare tutti gli elementi di un array e restituisce
un array con tutti i valori di return */
const MapResult = myCart.map((product) => product);
console.log(MapResult);

/* ********************* */

/* 3° Esercizio */

// Dichiaro i 2 array
const arrayOne = [2, 4, 6, 8, 10];
const arrayTwo = [6, 7, 8, 9, 10];

// Creo una funzione che moltiplica gli elementi di arrayOne * 2
const transforArrOne = arrayOne.map((element) => element * 2);
console.log(transforArrOne);

// Creo una funzione che aggiunge il valore di +5 ad agni elemento di arrayTwo
const transforArrTwo = arrayTwo.map((element) => element + 5);
console.log(transforArrTwo);

// Creo una funzione che ritorna gli elementi maggiori di 10
const filterArrOne = transforArrOne.filter((element) => element > 10);
console.log(filterArrOne);

// Creo una funzione che ritorna gli elementi pari (quelli che danno resto 0)
const filterArrTwo = transforArrTwo.filter((element) => element % 2 === 0);
console.log(filterArrTwo);

/* Questa funzione è stata sviluppata dopo essermi confrontato con il codice
 dei colleghi, motivo per cui ho commentato */
// const transformAndFilterArray = (arrayOne, arrayTwo) => {
//   const transforArrOne1 = arrayOne.map((element) => element * 2);
//   const transforArrTwo2 = arrayTwo.map((element) => element + 5);
//   const filterArrOne1 = transforArrOne1.filter((element) => element > 10);
//   const filterArrTwo2 = transforArrTwo2.filter((element) => element % 2 === 0);
//   return [filterArrOne1, filterArrTwo2];
// };
// console.log(transformAndFilterArray(arrayOne, arrayTwo));
