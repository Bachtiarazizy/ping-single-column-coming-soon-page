document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("subscription-form");
  const emailInput = document.getElementById("email");
  const errorMessage = document.getElementById("error-message");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const email = emailInput.value;

    if (!validateEmail(email)) {
      emailInput.classList.add("error");
      errorMessage.textContent = "Please provide a valid email address.";
      errorMessage.style.display = "block";
    } else {
      emailInput.classList.remove("error");
      errorMessage.style.display = "none";
      // Proceed with form submission or other logic
      alert("Thank you for subscribing!");
    }
  });

  emailInput.addEventListener("input", function () {
    if (emailInput.classList.contains("error")) {
      emailInput.classList.remove("error");
      errorMessage.style.display = "none";
    }
  });

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
});
