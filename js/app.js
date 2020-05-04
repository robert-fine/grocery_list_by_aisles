(function storeInputForm() {
  const storeForm = document.querySelector(".add-store");
  const storeName = document.querySelector("#store-name");
  const storeLocation = document.getElementById("store-location");

  storeForm.addEventListener("submit", function () {
    addStore(storeName.value, storeLocation.value, event);
  });
})();

function addStore(name, location, e) {
  e.preventDefault();
  console.log(name, location);
}
