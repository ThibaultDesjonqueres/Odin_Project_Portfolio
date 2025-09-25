document.addEventListener("DOMContentLoaded", function () {
  const phoneInputField = document.querySelector("#phone_number");

  const iti = window.intlTelInput(phoneInputField, {
    initialCountry: "fr",  // Set default to France
    preferredCountries: ["fr", "us", "gb", "de", "in"], // Show these first in the list
    separateDialCode: true, // Show the dial code separately (+33)
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js" // For formatting & validation
  });

  // Example: get full number on submit
  phoneInputField.form?.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("Full phone number:", iti.getNumber());
  });
});


const phoneInput = document.querySelector("#phone_number");

phoneInput.addEventListener("input", () => {
    // Keep only digits and plus sign
    phoneInput.value = phoneInput.value.replace(/[^\d+]/g, '');
});