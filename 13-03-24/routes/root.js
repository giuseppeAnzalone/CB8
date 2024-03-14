const express = require("express");
const router = express.Router();
const books = require("../books.json");
const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: true }));

router.get("/", (req, res) => {
    const htmlResponse = `<h1>Home Page</h1>
                          <a href="/books">Visualizza tutti i libri</a>
                          </br></br></br></br>
                          <a href="/aggiungi-libro">Aggiungi libro</a>`;
  res.send(htmlResponse);
});

router.get("/aggiungi-libro", (req, res) => {
  res.send(`
    <form action= "/books" method="POST">
    <input type="text" placeholder="Inserisci il titolo del libro" name="title" />
    <input type="text" placeholder="inserisci l'autore del libro" name="author" />
    <input type="submit" />
    </form>`);
});

router.post("/books", (req, res) => {
  const { title, author } = req.body;
  const newBook = { id: books.length + 1, title, author };
  books.push(newBook);
  res.redirect("/books");
});

router.get("/books", (req, res) => {
  res.send(books);
});

module.exports = router;