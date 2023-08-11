// init function on page load
function initializePage() {
  document.getElementById('rating-form').reset();
}

initializePage();

// listener for submit events on form
document.addEventListener('submit', (e) => {
  e.preventDefault();
  getRating();
})

// record the rating (checked radio) selected
function getRating() { 
  try {
    const rating = document.querySelector("input[type='radio'][name=rating-selector]:checked").value;
    console.log(rating);
    render(rating)
  } catch(error) {
    console.error(error);
    alert('Please select a rating'); // ToDo: replace alert with styled dialog/modal
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