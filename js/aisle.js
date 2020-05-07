class Aisle {
  constructor(name, id, numberOrder, description) {
    this.name = name;
    this.id = id;
    this.numberOrder = numberOrder;
    this.description = description;
  }

  pushToLocalStorageArr() {
    checkForAislesArr();
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

  aisleForm.addEventListener("submit", function () {
    addAisle(aisleName.value, aisleDescription.value, event);
  });
})();

let aislesArr;
let aisleIDcount = +localStorage.getItem("aislesIDcount");

function addAisle(name, description, e) {
  e.preventDefault();
  console.log(name, description);
}
