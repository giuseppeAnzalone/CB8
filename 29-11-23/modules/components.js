const logoAndSearchEl = () => {
  const searchContEl = document.createElement("div");
  const imgLogoEl = document.createElement("img");
  const inputEl = document.createElement("input");

  searchContEl.className = "search";
  imgLogoEl.src =
    "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/227_Netflix_logo-512.png";
  imgLogoEl.alt = "netflix-clone-logo";
  inputEl.type = "text";
  inputEl.placeholder = "Search";

  searchContEl.append(imgLogoEl, inputEl);

  return searchContEl;
};

const menuGenEl = () => {
  const linksContEl = document.createElement("div");
  const linksListEl = document.createElement("ul");
  const firstLinkEl = document.createElement("li");
  const secondLinkEl = document.createElement("li");
  const labelCatEl = document.createElement("label");
  const selectCatEl = document.createElement("select");
  const optionCatEl = document.createElement("option");

  linksContEl.className = "links";
  linksListEl.className = "links-list";
  firstLinkEl.textContent = "TV Shows";
  secondLinkEl.textContent = "Movies";
  labelCatEl.htmlFor = "categories";
  labelCatEl.textContent = "Categories";
  selectCatEl.name = "categories";
  selectCatEl.id = "categories";
  optionCatEl.value = "";

  linksListEl.append(
    firstLinkEl,
    secondLinkEl,
    labelCatEl,
    selectCatEl,
    optionCatEl
  );
  linksContEl.appendChild(linksListEl);

  return linksContEl;
};

const listsContainerElGen = (title) => {
  const container = document.createElement("div");
  const titleEl = document.createElement("h3");

  container.className = "lists-container";
  titleEl.textContent = title;

  container.append(titleEl);
  return container;
};

const cardsListElGen = () => {
  const container = document.createElement("div");

  container.className = "cards-list";

  return container;
};

const cardElGen = (imageData) => {
  const imageEl = document.createElement("img");

  imageEl.className = "card-item";
  imageEl.src = `https://image.tmdb.org/t/p/w500${imageData.poster_path}`;
  imageEl.alt = imageData.name;

  return imageEl;
};

const modalElGen = () => {
  const modalContEl = document.createElement("div");
  const modalTextEl = document.createElement("h2");

  modalContEl.className = "modal";
  modalTextEl.textContent = "Watch now the";

  modalContEl.appendChild(modalTextEl);

  return modalContEl;
};

export {
  logoAndSearchEl,
  menuGenEl,
  cardElGen,
  cardsListElGen,
  listsContainerElGen,
  modalElGen,
};
