const ratingForm = document.getElementById('rating-form');

// init function on page load
function initializePage() {
  ratingForm.reset();
  ratingForm.addEventListener('submit', onRatingSubmit);
}

initializePage();

// Get the submitted rating
function onRatingSubmit(e) {
  e.preventDefault();

  try {
    const rating = document.querySelector("input[type='radio'][name=rating-selector]:checked").value;
    render(rating)
  } catch(error) {
    console.error(error);
    window.alert('please select a rating')
  }
}

// render confirmation html of rating selected
function render(rating) {
  const ratingCard = document.getElementById('rating-card');
  ratingCard.classList.add('result-card');

  ratingCard.innerHTML = `
    <img src="./images/illustration-thank-you.svg" alt="">
    <div class="rating-summary">
      <p>You selected ${rating} out of 5</p>
    </div>
    <h1>Thank you!</h1>
    <p>We appreciate you taking the time to give a rating. If you ever need more support, 
      don’t hesitate to get in touch!</p>
    `
}