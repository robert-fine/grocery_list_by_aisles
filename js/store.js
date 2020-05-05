class Store {
  constructor(name, id, location) {
    this.name = name;
    this.id = id;
    this.location = location;
  }

  pushToLocStorageArr() {
    checkForArr("storesArr");
    storesArr.push({
      name: this.name,
      id: this.id,
      location: this.location,
    });
  }
}

(function storeInputForm() {
  const storeForm = document.querySelector(".add-store");
  const storeName = storeForm.querySelector("#store-name");
  const storeLocation = storeForm.querySelector("#store-location");

  storeForm.addEventListener("submit", function () {
    addStore(storeName.value, storeLocation.value, event);
  });
})();

let storesArr;
let storeIDcount = 0;

function addStore(name, location, e) {
  e.preventDefault();
  console.log(name, location);
}
