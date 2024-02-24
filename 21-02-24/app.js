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

// Ricerca con filtro (in questo caso per titolo)
app.get("/api/v1/products", (req, res) => {
  const { search, limit } = req.query;
  let filterProduct = [...products];

  if (search) {
    filterProduct = filterProduct.filter((product) => {
      return product.title.match(search);
    });
    if (limit) {
      filterProduct = filterProduct.slice(0, limit);
    }
  }
  if (filterProduct.length < 1) {
    return res.status(200).json({ success: true, data: [] });
  }
  res.status(200).json(filterProduct);
});
// **** End Routing ****//

app.listen(PORT, () => {
  console.log("server attivo");
});
