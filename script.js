const shareButton = document.getElementById("share-button");
const popup = document.getElementById("popup");
const closeButton = document.getElementById("close-button");

shareButton.addEventListener('click', () => {
  popup.classList.toggle("hidden");

});


closeButton.addEventListener('click', () => {
  popup.classList.add("hidden");
})