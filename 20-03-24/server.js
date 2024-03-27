require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/products");

const app = express();
const db = mongoose.connection;

mongoose.connect(process.env.DATABASE_URL);
app.use(express.json());

db.on("error", (err) => console.error(err));
db.on("open", () => console.log("Connessione con il Data Base riuscita"));

// Start Routes
app.get("/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

app.get("/products/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.post("/products", async (req, res) => {
  const product = new Product({
    title: req.body.title,
    price: req.body.price,
  });
  try {
    const newProduct = await product.save();
    res.status(201).json({ newProduct });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.delete("/products/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    res.status(201).json({ message: "Il prodotto è stato eliminato" });
  } catch {
    res.status(400).json({ message: err.message });
  }
});

app.put("/products/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      res.status(404).json({ message: "Prodotto non trovato" });
    } else {
      const { title, price } = req.body;

      if (title && price) {
        product.title = title;
        product.price = price;

        await product.save();
        res.status(201).json({ message: "Il prodotto è statp modificato" });
      }
    }
  } catch (error) {
    res.status(400).json({ message: err.message });
  }
});

app.listen(8000);
