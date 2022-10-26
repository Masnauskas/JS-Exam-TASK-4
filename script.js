/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

async function getCarData() {
  try {
    const response = await fetch("./cars.json");
    carData = await response.json();
    console.log(carData);
    const sortedCarData = carData.sort((a, b) => {
      if (a.brand.toLowerCase() < b.brand.toLowerCase()) {
        return -1;
      }
      if (a.brand.toLowerCase() > b.brand.toLowerCase()) {
        return 1;
      }
      return 0;
    });
    console.log(sortedCarData);
    drawCarCards(sortedCarData);
  } catch (error) {
    console.error(error);
  }
}

function drawCarCards(data) {
  const output = document.getElementById("output");

  data.forEach((itemData) => {
    const carBrand = document.createElement("h2");
    carBrand.textContent = itemData.brand;

    const carModel = document.createElement("div");
    carModel.textContent = itemData.models.join(", ");
    carModel.classList.add("car-model");

    output.append(carBrand, carModel);
  });
}

getCarData();
