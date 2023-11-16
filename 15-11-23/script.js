/**** Esercizio 1 ****/

const mockData = [
  {
    id: 1,
    robotName: "Giuseppe",
    price: 100,
    imgUrl: "https://robohash.org/giuseppe",
  },
  {
    id: 1,
    robotName: "Ilenia",
    price: 200,
    imgUrl: "https://robohash.org/ilenia",
  },
  {
    id: 1,
    robotName: "Milo",
    price: 300,
    imgUrl: "https://robohash.org/milo",
  },
];

const robotGenerator = (robotData) => {
  const cardEl = document.createElement("div");
  const imgEl = document.createElement("img");
  const textEl = document.createElement("div");
  const priceEl = document.createElement("p");
  const nameEl = document.createElement("h4");

  cardEl.className = "robot-card";
  imgEl.src = robotData.imgUrl;
  imgEl.alt = robotData.robotName;
  textEl.className = "text";
  priceEl.textContent = robotData.price + "€";
  nameEl.textContent = robotData.robotName;

  textEl.append(priceEl, nameEl);
  cardEl.append(textEl, imgEl);

  return cardEl;
};

const robotList = document.querySelector(".robot-list");

mockData.map((robotData) => robotList.appendChild(robotGenerator(robotData)));

/**** Esercizio 2 ****/

// Al try passo la funzione robotGenerator per un controllo
try {
  const robotGenerator = (robotData) => {
    const cardEl = document.createElement("div");
    const imgEl = document.createElement("img");
    const textEl = document.createElement("div");
    const priceEl = document.createElement("p");
    const nameEl = document.createElement("h4");

    cardEl.className = "robot-card";
    imgEl.src = robotData.imgUrl;
    imgEl.alt = robotData.robotName;
    textEl.className = "text";
    priceEl.textContent = robotData.price + "€";
    nameEl.textContent = robotData.robotName;

    textEl.append(priceEl, nameEl);
    cardEl.append(textEl, imgEl);

    return cardEl;
  };
} catch (error) {
  console.log("error function robotGenerator");
}
