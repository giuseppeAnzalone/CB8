const express = require("express");

const app = express();
const PORT = 8000;

let products = [
  {
    id: 1,
    title: "iPhone",
    price: 549,
  },
  {
    id: 2,
    title: "iPhone X",
    price: 899,
  },
  {
    id: 3,
    title: "Samsung Universe 9",
    price: 1249,
  },
  {
    id: 4,
    title: "OPPOF19",
    price: 280,
  },
];

app.use(express.json());

app.get("/products", (req, res, next) => {
  let sortedProducts = [...products]; // Clono l'array dei prodotti per non modificare l'originale usando lo spread operator
  const { sort } = req.query;

  if (sort === "asc") {
    sortedProducts.sort((a, b) => a.price - b.price); // Ordinamento dei prodotti dal meno caro al più caro
  } else if (sort === "desc") {
    sortedProducts.sort((a, b) => b.price - a.price); // Ordinamento dei prodotti dal più caro al meno caro
  }

  res.json(sortedProducts);
});

app.post("/products", (req, res, next) => {
  const body = req.body;

  if (body.id && body.title && body.price) {
    products.push(body);

    res.status(201).send("Prodotto aggiunto con successo");
  } else {
    res.status(400).send("Invalid product");
  }
});

app.delete("/products/:id", (req, res, next) => {
  const id = Number(req.params.id);

  products = products.filter((product) => product.id !== id);
  res.status(201).send("Prodotto cancellato");
});

app.put("/products/:id", (req, res, next) => {
  const id = Number(req.params.id);
  const body = req.body;
  const index = products.findIndex((product) => product.id === id);

  if (index === -1) {
    res.status(400).send("Prodotto non trovato");
  } else {
    products[index] = body;
    res.status(201).send("Prodotto modificato");
  }
});

app.listen(PORT);
