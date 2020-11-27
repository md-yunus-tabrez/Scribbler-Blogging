// Get the modal
var trash = document.getElementById('id01');

// on clicking No button modal will hide
var btn = document.getElementsByClassName("cancelbtn")[0];

btn.onclick = function() {
    trash.style.display = "none";
}