document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  const fullName = document.getElementById('name');
  const phone = document.getElementById('phone');
  const email = document.getElementById('email');
  const linkedin = document.getElementById('linkedin');

  form.addEventListener('submit', function (e) {
    let valid = true;
    let messages = [];

    // Full Name validation
    if (!/^[A-Za-z\s]{3,}$/.test(fullName.value)) {
      valid = false;
      messages.push("Full name must be at least 3 characters and only letters.");
    }

    // Phone number validation
    if (!/^\+91[0-9]{10}$/.test(phone.value)) {
      valid = false;
      messages.push("Phone number must start with +91 and have 10 digits.");
    }

    // Email validation
    if (!/^[\w.-]+@[\w-]+\.\w{2,4}$/.test(email.value)) {
      valid = false;
      messages.push("Please enter a valid email address.");
    }

    // LinkedIn (optional)
    if (linkedin.value && !/^https:\/\/([a-z]{2,3}\.)?linkedin\.com\/.+/.test(linkedin.value)) {
      valid = false;
      messages.push("LinkedIn URL must start with https://linkedin.com/");
    }

    if (!valid) {
      e.preventDefault();
      alert(messages.join("\n")); // clearer message display
    } else {
      e.preventDefault(); // optional, if you don't want default submission
      window.location.href = "montuhtml2.html";
    }
  });
});