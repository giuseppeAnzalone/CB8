/**** Esercizio 1 + Avanzato****/

// Creo una funzione che genera un popup
const popupTimer = setTimeout(() => {
  const popupEl = document.createElement("div");
  const popupText = document.createElement("p");
  const btnContainer = document.createElement("div");
  const btnSi = document.createElement("button");
  const btnNo = document.createElement("button");

  popupEl.className = "popup-container";
  btnContainer.className = "btn-container";

  popupEl.textContent = "Sei maggiorenne?";
  btnSi.textContent = "Si";
  btnNo.textContent = "No";

  popupEl.append(popupText, btnContainer);
  btnContainer.append(btnSi, btnNo);

  document.body.append(popupEl);

  btnSi.addEventListener("click", () => {
    popupEl.remove();
    document.getElementById("p-section").style.display = "block";
    document.body.style.backgroundColor = "black";
    document.body.style.color = "green";
  });

  btnNo.addEventListener("click", () => {
    location.href = "https://www.google.com/";
  });
}, 3000);

/**** Esercizio 2  ****/

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) =>
    console.log(data.products.filter((product) => product.price < 50))
  );
