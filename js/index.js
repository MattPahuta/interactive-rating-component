const ratingForm = document.getElementById('rating-form');
const dialog = document.querySelector('dialog');

// init function on page load
function initializePage() {
  ratingForm.reset();
  ratingForm.addEventListener('submit', onRatingSubmit);
  dialog.addEventListener('click', closeDialog);
}

initializePage();

// Get the submitted rating
function onRatingSubmit(e) {
  e.preventDefault();

  try {
    const rating = document.querySelector("input[type='radio'][name=rating-selector]:checked").value;
    console.log(rating);
    render(rating)
  } catch(error) {
    console.error(error);
    dialog.showModal();
  }
}

// close dialog box
function closeDialog(e) {
  if (e.target.id === 'close-dialog') {
    dialog.close();
  }

  const dialogDimensions = dialog.getBoundingClientRect()
  if (
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom
  ) {
    dialog.close()
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