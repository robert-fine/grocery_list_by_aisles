// BELOW DOES NOT WORK PROPERLY YET
function checkForArr(arr) {
  // if (localStorage.getItem(`${arr}`) === null) {
  //   arr = [];
  //   console.log(arr);
  // } else {
  //   arr = JSON.parse(localStorage.getItem(`${arr}`));
  // }

  let existing = localStorage.getItem(arr);

  existing = existing ? JSON.parse(existing) : [];
}
