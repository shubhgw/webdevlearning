let but1 = document.querySelector(".but1");
let h2 = document.querySelector(".mainHeading");

function renameH2() {
  h2.textContent = "Faaaaaaaaaa";
}

setTimeout(() => {
  console.log("I'm inside setTimeout");
  renameH2();
}, 5000); // set interval in ms......its 2sec
