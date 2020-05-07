class Item {
  constructor(name, id, store, storeLocation, aisle) {
    this.name = name;
    this.id = id;
    this.store = store;
    this.storeLocation = storeLocation;
    this.aisle = aisle;
  }

  pushToLocalStorageArr() {
    storesArr.push({
      name: this.name,
      id: this.id,
      store: this.store,
      storeLocation: this.storeLocation,
      aisle: this.aisle,
    });
  }
}

(function itemInputForm() {
  const itemForm = document.querySelector(".add-item");
  const itemName = itemForm.querySelector("#item-name");
  const itemStoreName = document.querySelector("#item-store");
  const itemAisle = itemForm.querySelector("#item-aisle");

  itemStoreName.innerHTML = storeSelector();

  itemForm.addEventListener("submit", function () {
    addItem(
      itemName.value,
      itemStoreName.value,
      itemStoreLocation.value,
      itemAisle.value,
      event
    );
  });
})();

let itemsArr;
let itemIDcount = +localStorage.getItem("itemIDcount");

function addItem(name, storeName, storeLocation, aisleName, e) {
  e.preventDefault();
  console.log(name, storeName, storeLocation, aisleName);
}

(function checkLocalStorageForItemsArr() {
  if (localStorage.getItem("itemsArr") === null) {
    itemsArr = [];
  } else {
    itemsArr = JSON.parse(localStorage.getItem("itemsArr"));
  }
})();
