// 1° esercizio  - Simulazione termometro
function getTemperature(gradi) {
  if (gradi > 30) {
    return "Fa caldo!";
  } else if (gradi >= 20 && gradi <= 30) {
    return "C'è un clima mite.";
  } else {
    return "Fa freddo!";
  }
}

// 2° esercizio - Object MyPerson
let myPerson = {
  myName: "Giuseppe",
  mySurname: "Anzalone",
  age: "35",
  job: "E-commerce",
  hobby: "coding",
  presentation: function () {
    return (
      "Mi chiamo " +
      this.myName +
      " " +
      this.mySurname +
      ", ho " +
      this.age +
      " anni e mi occupo di " +
      this.job +
      "."
    );
  },
};

// 3° esercizio - Gestore dei preferiti

const prefer = []; // Creazione array vuoto

function addToPrefer(filmTitle) {
  return prefer.push(filmTitle);
}

function showPrefer() {
  return prefer;
}

function removePrefer(film) {
  if (prefer.includes(film)) {
    const foundIndex = prefer.indexOf(film);
    prefer.splice(foundIndex, 1);
  } else {
    console.log("Couldn't find a title");
  }
}

//invocazione e stampa funzione getTemperature
console.log(getTemperature(31));

//invocazione e stampa metodo presentation
console.log(myPerson.presentation());

//invocazione funzioine addToPrefer
addToPrefer("The mask");
addToPrefer("Pearl Harbor");
addToPrefer("Matrix");
addToPrefer("The Devil's Advocate");

//invocazione e stampa funzione showPrefer
console.log(showPrefer());

//invocazione funzione removePrefer
removePrefer("The Devil's Advocate");

//invocazione e stampa funzione showPrefer dopo aver eliminato un elemento dall'array prefer
console.log(showPrefer());
