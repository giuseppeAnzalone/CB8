const express = require("express");
const hbs = require("hbs");
const recipes = require("./recipes");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "hbs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Start Routing

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/ricette", (req, res) => {
  res.render("recipes", { recipes });
});

app.get("/aggiungi-ricetta", (req, res) => {
  res.render("addRecipe");
});

app.get("/endpoints", (req, res) => {
  res.render("endPoints");
});

app.post("/aggiungi-ricetta", (req, res) => {
  const newRecipe = req.body; // Assume che il corpo della richiesta contenga i dettagli della nuova ricetta
  recipes.push(newRecipe);
  res.redirect("/ricette"); // Reindirizza alla pagina delle ricette dopo l'aggiunta della nuova ricetta
});

// End Routing

app.listen(8000, () => {
  console.log("server attivo");
});
