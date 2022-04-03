const express = require("express");
const fs = require("fs");

const fsp = fs.promises;

const router = express.Router();

/* GET users listing. */
router.get("/", (req, res) =>
  fsp.readFile("data/users.json", "utf-8").then((users) => res.send(users))
);

router.get("/:userId", (req, res) => {
  // console.log(req.params); - parametry ktore przychodza z requestu

  // Zadanie - napisz obsluge tej funkcji. Funkcja ma zwracac obiekt uzytkownika o ID rownego userId przekazanego w req.params

  fsp.readFile("data/users.json", "utf8").then((users) => {
    const jsUsers = JSON.parse(users);
    const currentUser = jsUsers.find((user) => user.id === parseInt(req.params.userId, 10));

    if (!currentUser) {
      return res.status(404).send({ message: "Not Found" });
    }

    return res.send(currentUser);
  });
});

router.post("/", (req, res) => {
  console.log("hello world!");

  // 1. Odczytaj zawartosc pliku users.json
  // 2. Sparsuj to do obiektu js
  // 3. Uzyj metody push aby dodac obiekt (nadaj mu nowe ID za pomoca uuid)
  // 4. Zapisz plik do pliku users.json
  // 5. Zwroc utworzonego usera z jego ID

  res.send([]);
});

module.exports = router;
