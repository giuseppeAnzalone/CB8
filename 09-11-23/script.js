/****  Esercizio 1 ****/

// Creo gli elementi del DOM
const heroContainerEl = document.createElement("div");
const heroWrapEl = document.createElement("div");
const titleEl = document.createElement("h1");
const paragraphEl = document.createElement("p");
const btnEl = document.createElement("button");

// Asssegno agli elementi le classi
heroContainerEl.setAttribute("class", "hero-container");
heroWrapEl.setAttribute("class", "hero-wrap");
titleEl.setAttribute("class", "title");
paragraphEl.setAttribute("class", "paragraph");
btnEl.setAttribute("class", "btn");

// Assegno il contenuto agli elementi
titleEl.textContent = "Lorem ipsum dolor sit.";

paragraphEl.textContent =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, commodi.";

btnEl.textContent = "Hide hero";

// Appendo gli elementi al DOM
document.body.appendChild(heroContainerEl);
heroContainerEl.appendChild(heroWrapEl);
heroWrapEl.appendChild(titleEl);
heroWrapEl.appendChild(paragraphEl);
heroWrapEl.appendChild(btnEl);

/****  Esercizio 2 ****/

// Creo una funzione che al click del pulsante "Hide hero" nasconde la hero section
btnEl.addEventListener("click", () => {
  heroContainerEl.style.display = "none";
});

/****  Esercizio 3 ****/
// Creo l'elemento div con classe "gallery"
const galleryEl = document.createElement("div");
galleryEl.setAttribute("class", "gallery");

// Appendo al body il div con classe "gallery" creato precedentemente
document.body.appendChild(galleryEl);

// Creo una funzione imageGenerator che accetta 3 parametri
const imageGenerator = (idImg, urlImg, altText) => {
  const imgEl = document.createElement("img");
  imgEl.setAttribute("id", idImg);
  imgEl.setAttribute("src", urlImg);
  imgEl.setAttribute("alt", altText);
  imgEl.setAttribute("class", "img");
  return imgEl;
};
// Invocazione della funzione imageGenerator
galleryEl.appendChild(
  imageGenerator("1", "https://picsum.photos/300/300?1", "image1")
);

/**** Esercio 4 per gli audaci ****/

// Creazione arrary
const imageList = [
  {
    id: 1,
    imgUrl: "https://picsum.photos/300/300?random=6",
    altText: "Immagine 1",
  },
  {
    id: 2,
    imgUrl: "https://picsum.photos/300/300?random=10",
    altText: "Immagine 2",
  },
  {
    id: 3,
    imgUrl: "https://picsum.photos/300/300?random=9",
    altText: "Immagine 3",
  },
  {
    id: 4,
    imgUrl: "https://picsum.photos/300/300?random=7",
    altText: "Immagine 4",
  },
  {
    id: 5,
    imgUrl: "https://picsum.photos/300/300?random=4",
    altText: "Immagine 5",
  },
  {
    id: 6,
    imgUrl: "https://picsum.photos/300/300?random=3",
    altText: "Immagine 6",
  },
  {
    id: 7,
    imgUrl: "https://picsum.photos/300/300?random=7",
    altText: "Immagine 7",
  },
  {
    id: 8,
    imgUrl: "https://picsum.photos/300/300?random=4",
    altText: "Immagine 8",
  },
  {
    id: 9,
    imgUrl: "https://picsum.photos/300/300?random=2",
    altText: "Immagine 9",
  },
  {
    id: 10,
    imgUrl: "https://picsum.photos/300/300?random=1",
    altText: "Immagine 10",
  },
];

// Eseguo il forEach dell'array imageList
imageList.forEach((element) => {
  // Assegno alla variabile newImage il risultato della funzione imageGenerator
  const newImage = imageGenerator(element.id, element.imgUrl, element.altText);
  // Appendo newImage al DOM
  galleryEl.appendChild(newImage);
});
