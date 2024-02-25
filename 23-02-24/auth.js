const auth = (req, res, next) => {
  const { user } = req.query;

  if (user !== "admin") {
    res
      .status(401)
      .send(`Mi spiace ma ${user} non hai i permessi di Administrator`);
  }

  next();
};
module.exports = auth;
