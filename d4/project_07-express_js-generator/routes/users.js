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

// router.post('/', (req, res) => {
//   // fsp.readFile('data/users.json', 'utf-8').then(console.log);

//   // // users maja pochodzic z pliku
//   res.send([]);
// });

module.exports = router;
