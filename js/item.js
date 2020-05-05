(function itemInputForm() {
  const itemForm = document.querySelector(".add-item");
  const itemName = itemForm.querySelector("#item-name");
  const itemStoreName = itemForm.querySelector("#item-store");
  const itemStoreLocation = itemForm.querySelector("#item-store-location");
  const itemAisle = itemForm.querySelector("#item-aisle");

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

function addItem(name, storeName, storeLocation, aisleName, e) {
  e.preventDefault();
  console.log(name, storeName, storeLocation, aisleName);
}
