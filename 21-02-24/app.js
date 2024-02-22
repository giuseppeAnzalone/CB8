const express = require("express");
const path = require("path");
const { products } = require("./data");

// impostazione del server
const app = express();
const PORT = 8080;

// **** Start Routing ****//
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
});

// Mostra tutte le Api
app.get("/catalogue", (req, res) => {
  res.json(products);
});

// API con id, title e brand
app.get("/api/products", (req, res) => {
  const productApi = products.map((product) => {
    const { id, title, brand } = product;
    return { id, title, brand };
  });
  res.json(productApi);
});

// Ricerca per id
app.get("/api/products/:productId", (req, res) => {
  const { productId } = req.params;
  const singleProduct = products.find(
    (product) => product.id === Number(productId)
  );
  if (!singleProduct) {
    res.status(404).send("product not found");
  }
  res.json(singleProduct);
});
// **** End Routing ****//

app.listen(PORT, () => {
  console.log("server attivo");
});
