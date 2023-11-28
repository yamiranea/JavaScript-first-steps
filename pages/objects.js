// 1.
let myCar = {
  brand: "Mini",
  model: "Mini One",
  year: "2023",
  features: {
    seats: "5",
    doors: "5",
    color: "white",
    combustion: ["hybrid", "fuel"],
  },
};

// 2.
function carBrand(car) {
  document.write(
    `My car brand is ${myCar.brand} and the model is ${myCar.model}<br>`
  );
  return car.brand;
}

// 3.
function carDoors(car) {
  `My car has ${myCar.features.doors} doors and ${myCar.features.seats} seats <br>`;
  return car.features.doors;
}

// 4.
function carFeatures(car, atribute) {
  return car.features[atribute];
}

console.log(`Car brand: ${carBrand(myCar)}`);
console.log(`Car doors: ${carDoors(myCar)}`);
console.log(`Car color: ${carFeatures(myCar, "color")}`);
