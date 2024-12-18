document.getElementById("accountForm").addEventListener("submit", function(event) {
    let isValid = true;

    // Name validation
    const name = document.getElementById("name").value;
    const nameError = document.getElementById("nameError");
    if (name.trim() === ''){
        nameError.textContent = "Name cannot be empty"
    }
    if (name.length < 3 || name.length > 50) {
      nameError.textContent = "Name must be between 3 and 50 characters.";
      isValid = false;
    } else {
      nameError.textContent = "";
    }

    // Email validation
    const email = document.getElementById("email").value;
    const emailError = document.getElementById("emailError");
    if (!email) {
      emailError.textContent = "Email is required.";
      isValid = false;
    } else {
      emailError.textContent = "";
    }

    // Phone validation
    const phone = document.getElementById("phone").value;
    const phoneError = document.getElementById("phoneError");
    if (phone.length < 10 || phone.length > 14) {
      phoneError.textContent = "Phone number must be between 10 and 14 digits.";
      isValid = false;
    } else {
      phoneError.textContent = "";
    }

    // Age validation
    const age = document.getElementById("age").value;
    const ageError = document.getElementById("ageError");
    if (age < 18 || age > 120) {
      ageError.textContent = "Age must be between 18 and 120.";
      isValid = false;
    } else {
      ageError.textContent = "";
    }

    // Gender validation
    const gender = document.getElementById("gender").value;
    const genderError = document.getElementById("genderError");
    if (gender.length < 4 || gender.length > 15) {
      genderError.textContent = "Gender must be between 4 and 15 characters.";
      isValid = false;
    } else {
      genderError.textContent = "";
    }

    // Prevent form submission if validation fails
    if (!isValid) {
      event.preventDefault();
    }
  });