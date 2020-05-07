class Store {
  constructor(name, id, location) {
    this.name = name;
    this.id = id;
    this.location = location;
  }

  pushToLocalStorageArr() {
    checkForStoresArr();
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
let storeIDcount = +localStorage.getItem("storeIdCount");

function addStore(name, location, e) {
  e.preventDefault();
  console.log(name, location);
  let newStore = new Store(name, storeIDcount);
}

function checkForStoreArr() {
  if (localStorage.getItem("storesArr") === null) {
    storesArr = [];
  } else {
    storesArr = JSON.parse(localStorage.getItem("storesArr"));
  }
}
