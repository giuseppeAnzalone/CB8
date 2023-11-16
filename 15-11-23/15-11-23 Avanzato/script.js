const mockData = [
  {
    id: 1,
    robotName: "Giuseppe",
    price: 100,
    imgUrl: "https://robohash.org/giuseppe",
  },
  {
    id: 2,
    robotName: "Casimiro",
    price: 200,
    imgUrl: "https://robohash.org/casimiro",
  },
  {
    id: 3,
    robotName: "Ilenia",
    price: 300,
    imgUrl: "https://robohash.org/ilenia",
  },
  {
    id: 4,
    robotName: "Milo",
    price: 400,
    imgUrl: "https://robohash.org/milo",
  },
];

const mockDataNav = [
  {
    icons: "📱",
    textNav: "Robot app",
  },
  {
    icons: "🤖",
    textNav: "Robot head",
  },
  {
    icons: "🦾",
    textNav: "Robot arms",
  },
  {
    icons: "🦿",
    textNav: "Robot leg",
  },
  {
    icons: "⚙️",
    textNav: "Robot acc",
  },
];

// Creo una funzione che genera le card
const robotGenerator = (robotData) => {
  const roboCardEl = document.createElement("div");
  const favoritesEl = document.createElement("div");
  const imageRoboEl = document.createElement("img");
  const paragraphEl = document.createElement("p");
  const roboNameEl = document.createElement("h4");
  const addToCartEl = document.createElement("div");

  roboCardEl.className = "card";
  favoritesEl.className = "favorites";
  favoritesEl.textContent = "❤️";
  imageRoboEl.src = robotData.imgUrl;
  paragraphEl.className = "price";
  paragraphEl.textContent = robotData.price;
  roboNameEl.className = "product-name";
  roboNameEl.textContent = robotData.robotName;
  addToCartEl.textContent = "➕";

  roboCardEl.append(
    favoritesEl,
    imageRoboEl,
    paragraphEl,
    roboNameEl,
    addToCartEl
  );

  return roboCardEl;
};

// Creo una funzione che genera il menu nav
const navGenerator = (navElement) => {
  const iconContainer = document.createElement("div");
  const paragraphNav = document.createElement("p");

  iconContainer.className = "icons-menu-container";

  iconContainer.textContent = navElement.icons;
  paragraphNav.textContent = navElement.textNav;

  iconContainer.appendChild(paragraphNav);

  return iconContainer;
};

// Creo l'elemento "mega-container" e l'appendo al body
const megaContainer = document.createElement("div");
megaContainer.className = "mega-container";
document.body.appendChild(megaContainer);

//Creo l'elemento header
const headerEl = document.createElement("header");
const logoTextEl = document.createElement("div");
const titleEl = document.createElement("h1");
const searchEl = document.createElement("div");
const cartEl = document.createElement("div");

headerEl.className = "header";
logoTextEl.className = "logo-text";
titleEl.textContent = "Robocommerce";
searchEl.className = "icons-container";
cartEl.className = "icons-container";
searchEl.textContent = "🔍";
cartEl.textContent = "🛒";

logoTextEl.appendChild(titleEl);
headerEl.append(logoTextEl, searchEl, cartEl);

megaContainer.appendChild(headerEl);

// Creo l'elemento "menu-nav" container e l'appendo al mega-container
const navEl = document.createElement("nav");
navEl.className = "menu-nav";
megaContainer.appendChild(navEl);

// Faccio il map per scorrere tutti gli elementi dell'array mockDataNav e appendo al navEl
mockDataNav.map((navElement) => navEl.append(navGenerator(navElement)));

// Creo l'elemento section e l'appendo al mega-container
const sectionEl = document.createElement("section");
sectionEl.className = "section";
megaContainer.appendChild(sectionEl);

// Creo il contenitore "h3-text" a cui appendo l'elemento h3 TextEl
const textContainer = document.createElement("div");
const textEl = document.createElement("h3");
textContainer.className = "h3-text";
textEl.textContent = "Recommended for you";
textContainer.appendChild(textEl);

// Creo il contenitore "card-wrapper" e lo appendo alla section
const cardContainer = document.createElement("div");
cardContainer.className = "card-wrapper";
sectionEl.append(textContainer, cardContainer);

// Faccio il map per scorrere tutti gli elementi dell'array mockData e appendo al CadContainer
mockData.map((robotData) => cardContainer.append(robotGenerator(robotData)));
