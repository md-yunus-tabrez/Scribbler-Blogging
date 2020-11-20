// Get the modal
var create = document.getElementById("post");

// Get the button that opens the modal
var btn = document.getElementById("CentreBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  create.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  create.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == create) {
    create.style.display = "none";
  }
}