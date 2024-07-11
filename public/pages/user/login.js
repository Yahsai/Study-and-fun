// Access the form element
const form = document.querySelector('form');
const registerBox = document.querySelector('.register_box')
const formSubmitted = document.querySelector('.formSubmitted')

function hideForm(){
  registerBox.style.display = 'none';
  formSubmitted.style.display = 'block';
  formSubmitted.style.margin = '1rem auto';
}

// Add an event listener for the form submission
form.addEventListener('submit', function(event) {
  // Prevent the default form submission
  event.preventDefault();

  // Access the input values
  const username = document.getElementById('user').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('Password').value;
  const verifyPassword = document.getElementById('verify_pass').value;

  // Initialize a flag to track validation status
  let isValid = true;

  // Example validation: Check if the username is not empty
  if (!username) {
    alert('Username is required.');
    isValid = false;
  }

  // Example validation: Check if the email is not empty and valid
  if (!email || !email.includes('@')) {
    alert('Please enter a valid email.');
    isValid = false;
  }

  // Example validation: Check if the password is not empty and matches the verify password
  if (!password || password !== verifyPassword) {
    alert('Passwords do not match.');
    isValid = false;
  }

  // If all validations pass, submit the form programmatically or perform further actions
  if (isValid) {
    // For demonstration, we're just logging to the console
    // In a real application, you might submit the form data using fetch() or XMLHttpRequest
    console.log('Form is valid. Submitting form...');
    // form.submit(); // Uncomment this line to submit the form programmatically
    hideForm();
  }

});