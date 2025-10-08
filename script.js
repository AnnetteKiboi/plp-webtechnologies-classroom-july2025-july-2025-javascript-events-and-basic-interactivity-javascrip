// ---------------------------
// 🎉 Part 1: Event Handling
// ---------------------------

// Light/Dark Mode Toggle
const toggleBtn = document.getElementById('toggle-btn');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  console.log('Dark mode toggled!');
});


// ---------------------------
// 🎮 Part 2: Interactive Elements
// ---------------------------

// Counter Feature
let count = 0;
const counterBtn = document.getElementById('counter-btn');

counterBtn.addEventListener('click', () => {
  count++;
  counterBtn.textContent = `Count: ${count}`;
  console.log(`Button clicked ${count} times`);
});


// ---------------------------
// 📋✅ Part 3: Form Validation
// ---------------------------

const form = document.getElementById('user-form');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent default form submission

  // Get form values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  // Clear previous error messages
  document.getElementById('name-error').textContent = "";
  document.getElementById('email-error').textContent = "";
  document.getElementById('password-error').textContent = "";

  let valid = true;

  // Name Validation
  if (name.length < 3) {
    document.getElementById('name-error').textContent = "Name must be at least 3 characters long.";
    valid = false;
  }

  // Email Validation (basic regex)
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    document.getElementById('email-error').textContent = "Please enter a valid email address.";
    valid = false;
  }

  // Password Validation
  if (password.length < 6) {
    document.getElementById('password-error').textContent = "Password must be at least 6 characters long.";
    valid = false;
  }

  // Final Validation Result
  if (valid) {
    alert("✅ Form submitted successfully!");
    console.log("Form submitted successfully!");
    form.reset();
  }
});
