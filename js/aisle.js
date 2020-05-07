class Aisle {
  constructor(name, id, numberOrder, description) {
    this.name = name;
    this.id = id;
    this.numberOrder = numberOrder;
    this.description = description;
  }

  pushToLocalStorageArr() {
    ailesArr.push({
      name: this.name,
      id: this.id,
      numberOrder: this.numberOrder,
      description: this.description,
    });
  }
}

(function aisleInputForm() {
  const aisleForm = document.querySelector(".add-aisle");
  const aisleName = aisleForm.querySelector("#aisle-name");
  const aisleDescription = aisleForm.querySelector("#aisle-description");
  const storeLocation = document.querySelector("#aisle-store");

  storeLocation.innerHTML = storeSelector();

  aisleForm.addEventListener("submit", function () {
    addAisle(
      aisleName.value,
      aisleDescription.value,
      storeLocation.value,
      event
    );
  });
})();

let aislesArr;
let aisleIDcount = +localStorage.getItem("aislesIDcount");

function addAisle(name, description, store, e) {
  e.preventDefault();
  console.log(name, description, store);

  const currentStore = storesArr.find((storeObj) => storeObj.id == store);
  console.log(currentStore.id);
}

(function checkLocalStorageForAislesArr() {
  if (localStorage.getItem("aislesArr") === null) {
    aislesArr = [];
  } else {
    aislesArr = JSON.parse(localStorage.getItem("aislesArr"));
  }
})();
