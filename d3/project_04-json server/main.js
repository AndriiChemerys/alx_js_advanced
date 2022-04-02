fetch("http://localhost:3003/cars", {
  method: "POST",
  body: JSON.stringify({
    name: "Polonez",
  }),
  headers: {
    "Content-Type": "application/json",
  },
});
