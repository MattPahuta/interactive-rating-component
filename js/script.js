const cardContainer = document.getElementById("cardContainer");
const ratingTemplate = document.getElementById("ratingTemplate");
const confirmationTemplate = document.getElementById("confirmationTemplate");

function showRatingCard() {
  const ratingForm = ratingTemplate.content.cloneNode(true);
  const form = ratingForm.querySelector("#ratingForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    const formData = new FormData(form);
    const rating = formData.get("rating");
  
    if (!rating) return;

    form.classList.add("fade-out");
    setTimeout(() => {
      showConfirmation(rating);
    }, 400);
    
    form.reset();
    
  });
  
  cardContainer.replaceChildren(ratingForm);
}

function showConfirmation(rating) {
  const ratingConfirmation = confirmationTemplate.content.cloneNode(true);
  ratingConfirmation.querySelector("#selectedRating").textContent = rating; 

  cardContainer.replaceChildren(ratingConfirmation);

}

showRatingCard();

