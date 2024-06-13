var isBlue = false;

document.querySelector("#la").addEventListener("click", function() {
  if(isBlue) {
    this.style.color = ""; // Change to original color
    isBlue = false;
  } else {
    this.style.color= "#ef70c5";
    isBlue = true;
  }
});
var isBlue = false;

document.querySelector("#lo").addEventListener("click", function() {
  if(isBlue) {
    this.style.color = ""; // Change to original color
    isBlue = false;
  } else {
    this.style.color= "#ef70c5";
    isBlue = true;
  }
});
