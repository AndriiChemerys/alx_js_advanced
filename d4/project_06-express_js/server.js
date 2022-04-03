import express from "express";
import fs from "fs";

const app = express();

app.get("/", (req, res) => {
  fs.readFile("./data/hello.txt", "utf8", (error, data) => {
    if (error) {
      console.log(error);
      return;
    }

    fs.writeFile("./data/hello2.txt", data, "utf8", (error2, data2) => {
      if (error2) {
        console.log(error2);
        return;
      }
      console.log("success!");
    });
    console.log(data);
  });

  res.send("Hello world!");
});

app.listen(5000, () => {
  console.log("The app is running on port 5000");
});
