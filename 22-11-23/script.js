/****  Esercizio 1 ****/
const getImage = async () => {
  const res = await fetch("https://picsum.photos/v2/list");
  const data = await res.json();
  const imageFilter = data.filter((image) => console.log(image.download_url));

  return imageFilter;
};

getImage();

/**** Esercizio 2 ****/

const object = {
  id: "0",
  author: "Alejandro Escamilla",
  download_url: "https://picsum.photos/id/0/5000/3333",
};

const getImgText = (dataImage) => {
  const containerEl = document.createElement("div");
  const imgEl = document.createElement("img");
  const textEl = document.createElement("h3");

  containerEl.className = "wrapper";

  imgEl.src = dataImage.download_url;
  textEl.textContent = dataImage.author;

  containerEl.append(imgEl, textEl);

  return containerEl;
};

document.body.appendChild(getImgText(object));


/**** 3 Esercizio Avanzato ****/

const getAllImage = async () => {
  const res = await fetch("https://picsum.photos/v2/list");
  const data = await res.json();

  return data.forEach((image) => {
    const wrapper = getImgText(image);

    document.body.appendChild(wrapper);
  });
};

getAllImage();
      

