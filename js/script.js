const form =document.getElementById("ratingForm");
const cardContainer = document.getElementById("cardContainer");
const confirmationTemplate = document.getElementById("confirmationTemplate");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const rating = formData.get("rating");

  // ToDo: Add error dialog ('Please select a rating'), another template element?
  if (!rating) return;

  // Use cloneNode method to clone and update confirmation card
  const ratingConfirmation = confirmationTemplate.content.cloneNode(true);
  // Apply the user selected rating to the <span> element
  ratingConfirmation.querySelector("#selectedRating").textContent = rating; 

  // Replace rating card with result card
  cardContainer.replaceChildren(ratingConfirmation);
});

form.reset();