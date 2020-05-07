class Store {
  constructor(name, id, location) {
    this.name = name;
    this.id = id;
    this.location = location;
  }

  pushToLocalStorage() {
    storesArr.push({
      name: this.name,
      id: this.id,
      location: this.location,
    });
    localStorage.setItem("storesArr", JSON.stringify(storesArr));
  }
}

(function storeInputForm() {
  const storeForm = document.querySelector(".add-store");
  const storeName = storeForm.querySelector("#store-name");
  const storeLocation = storeForm.querySelector("#store-location");

  storeForm.addEventListener("submit", function () {
    addStore(storeName.value, storeLocation.value, event);
    storeForm.reset();
  });
})();

let storesArr;
let storeIDcount = +localStorage.getItem("storeIDcount");

function addStore(name, location, e) {
  e.preventDefault();
  let newStore = new Store(name, storeIDcount, location);
  newStore.pushToLocalStorage();
  storeIDcount++;
  localStorage.setItem("storeIDcount", storeIDcount);

  const itemStoreName = document.querySelector("#item-store");
  itemStoreName.innerHTML = storeSelector();

  const aisleStoreName = document.querySelector("#aisle-store");

  aisleStoreName.innerHTML = storeSelector();
}

(function checkLocalStorageForStoresArr() {
  if (localStorage.getItem("storesArr") === null) {
    storesArr = [];
  } else {
    storesArr = JSON.parse(localStorage.getItem("storesArr"));
  }
})();

function storeSelector() {
  let stores = "";
  storesArr.forEach((store) => {
    stores += `<option value="${store.id}">${store.name} - ${store.location}</option>`;
  });
  return stores;
}
