//Question 2
var btn = document.querySelector(".button");

btn.addEventListener("mouseover", function() {
  this.textContent = "Hey, I told you not to hover over me!";
})
btn.addEventListener("mouseout", function() {
  this.textContent = "Don't hover over me";
})