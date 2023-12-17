const httpGet = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();

  const newArray = data.map((element) => {
    element["priority"] = genRandomNum(1, 5);
    element["data"] = date[genRandomNum(0, date.length)];

    return element;
  });

  return newArray;
};

// Genera numero random
function genRandomNum(min, max) {
  return parseInt(Math.random() * (max - min) + min);
}

// Confronta date
function compareDates(inputData) {
  // Ottieni la data corrente
  const dataCorrente = new Date();

  // Estrai giorno, mese e anno dalla data corrente
  const giornoCorrente = dataCorrente.getDate();
  const meseCorrente = dataCorrente.getMonth() + 1; // Nota: i mesi sono indicizzati da 0 a 11
  const annoCorrente = dataCorrente.getFullYear();

  // Dividi la data in input in giorno, mese e anno
  const partiDataInput = inputData.split("-");
  const giornoInput = parseInt(partiDataInput[0]);
  const meseInput = parseInt(partiDataInput[1]);
  const annoInput = parseInt(partiDataInput[2]);

  // Confronta le date
  if (
    annoInput === annoCorrente &&
    meseInput === meseCorrente &&
    giornoInput === giornoCorrente
  ) {
    return 0; // La data è quella di oggi
  } else if (
    annoInput > annoCorrente ||
    (annoInput === annoCorrente && meseInput > meseCorrente) ||
    (annoInput === annoCorrente &&
      meseInput === meseCorrente &&
      giornoInput > giornoCorrente)
  ) {
    return 1; // La data è nel futuro
  } else {
    return -1; // La data è nel passato
  }
}

// Funzione di confronto per il metodo sort
function confronto(a, b) {
  // Converte le stringhe di data in oggetti Date
  const dataA = new Date(a.data.split("-").reverse().join("-"));
  const dataB = new Date(b.data.split("-").reverse().join("-"));

  // Confronto per data
  const confrontoData = dataA - dataB;

  // Se le date sono diverse, ritorna il risultato del confronto per data
  if (confrontoData !== 0) {
    return confrontoData;
  }

  // Se le date sono uguali, confronta per priorità
  return a.priority - b.priority;
}

// Array di date
const date = [
  "01-12-2023",
  "02-12-2023",
  "03-12-2023",
  "04-12-2023",
  "05-12-2023",
  "06-12-2023",
  "07-12-2023",
  "08-12-2023",
  "09-12-2023",
  "10-12-2023",
  "11-12-2023",
  "12-12-2023",
  "13-12-2023",
  "14-12-2023",
  "15-12-2023",
  "16-12-2023",
  "17-12-2023",
  "18-12-2023",
  "19-12-2023",
  "20-12-2023",
  "21-12-2023",
  "22-12-2023",
  "23-12-2023",
  "24-12-2023",
  "25-12-2023",
  "26-12-2023",
  "27-12-2023",
  "28-12-2023",
  "29-12-2023",
  "30-12-2023",
  "31-12-2023",
];

const result = await httpGet();

result.sort(confronto);

// Card generator and append
result.forEach((element) => {
  const cardEl = document.createElement("div");
  const spanNameEl = document.createElement("span");
  const spanDateEl = document.createElement("span");
  const iconCardEl = document.createElement("p");
  const nameEl = document.createElement("p");
  const dateEl = document.createElement("p");
  const priorityEl = document.createElement("p");

  const splitNameEl = element.title.split(" "); // Split title/nameEl

  cardEl.className = "card";
  iconCardEl.className = "icon-card";
  priorityEl.className = "priority";

  iconCardEl.textContent = "🩹";
  spanNameEl.textContent = "NAME: ";
  nameEl.textContent = `${splitNameEl[0]} ${splitNameEl[1]}`;

  spanDateEl.textContent = "DATE: ";
  dateEl.textContent = element.data;
  priorityEl.textContent = "PRIORITY: " + element.priority;

  nameEl.insertBefore(spanNameEl, nameEl.firstChild);
  dateEl.insertBefore(spanDateEl, dateEl.firstChild);
  cardEl.append(iconCardEl, nameEl, dateEl, priorityEl);

  const oggi = document.querySelector(".list-oggi");
  const futuri = document.querySelector(".list-futuri");
  const conclusi = document.querySelector(".list-conclusi");

  switch (compareDates(element.data)) {
    case 1:
      futuri.appendChild(cardEl);
      break;
    case 0:
      oggi.appendChild(cardEl);
      break;
    case -1:
      conclusi.appendChild(cardEl);
      break;
  }
  return cardEl;
});
