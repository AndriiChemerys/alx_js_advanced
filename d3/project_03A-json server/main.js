// console.log(cars);

const list = document.querySelector("#list");

fetch("http://localhost:3003/cars")
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((cars) => {
    // console.log(cars);

    //tutaj sie powinno zadziac dodanie samochodu do HTML
    cars.forEach((car) => {
      list.innerHTML += `<li>${car.Name}</li>`;
    });
  })
  .catch((error) => {
    console.log(error);
  });
