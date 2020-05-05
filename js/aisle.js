(function aisleInputForm() {
  const aisleForm = document.querySelector(".add-aisle");
  const aisleName = aisleForm.querySelector("#aisle-name");
  const aisleDescription = aisleForm.querySelector("#aisle-description");

  aisleForm.addEventListener("submit", function () {
    addAisle(aisleName.value, aisleDescription.value, event);
  });
})();

function addAisle(name, description, e) {
  e.preventDefault();
  console.log(name, description);
}
