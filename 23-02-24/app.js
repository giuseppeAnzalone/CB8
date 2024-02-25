const express = require("express");

const auth = require("./auth");

// il bodyParser serve per prendere dei dati inseriti in un form
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/**** Non serve get della home in quanto il file root dell'app si chiama index.html 

app.get("/", (req, res) => {
  res.sendFile(__dirname + `/public/index.html`);
});

****/

app.get("/form", (req, res) => {
  res.sendFile(__dirname + `/public/form.html`);
});

app.post("/mostra-dati", (req, res) => {
  const { user } = req.body;
  const { surname } = req.body;

  if (user && surname) {
    return res
      .status(200)
      .send(`Ecco i dati che hai inserito: ${user} ${surname}`);
  }
  res.status(404).send("Errore nell'elaborazione dei dati");
});

app.get("/dashboard", auth, (req, res) => {
  res.status(200).send(`<h1>Dashboard</h1>`);
});

app.listen(5000, () => {
  console.log("server attivo");
});
