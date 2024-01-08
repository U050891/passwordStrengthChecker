User
function checkPasswordStrength() {
  var password = document.getElementById("passwordInput").value;
  var strength = 0;

  // Regular expressions to check for different criteria
  var regex = {
    length: /(?=.{8,})/,
    uppercase: /[A-Z]/,
    lowercase: /[a-z]/,
    numbers: /[0-9]/,
    specialChars: /[^A-Za-z0-9]/
  };

  // Calculate strength based on criteria
  if (regex.length.test(password)) strength++;
  if (regex.uppercase.test(password)) strength++;
  if (regex.lowercase.test(password)) strength++;
  if (regex.numbers.test(password)) strength++;
  if (regex.specialChars.test(password)) strength++;

  // Display strength
  var strengthIndicator = document.getElementById("strengthIndicator");
  switch (strength) {
    case 0:
      strengthIndicator.innerHTML = "Please enter a password";
      break;
    case 1:
      strengthIndicator.innerHTML = "Bruh";
      break;
    case 2:
      strengthIndicator.innerHTML = "Moderate";
      break;
    case 3:
      strengthIndicator.innerHTML = "Good";
      break;
    case 4:
    case 5:
      strengthIndicator.innerHTML = "Strong";
      break;
    default:
      break;
  }

  // Offer password suggestions and alternatives
  var passwordSuggestions = document.getElementById("passwordSuggestions");
  var suggestions = generatePasswordSuggestions(password);
  var alternatives = generatePasswordAlternatives(password);
  passwordSuggestions.innerHTML = suggestions + "<br><br>" + alternatives;
}

function generatePasswordSuggestions(password) {
  var suggestions = [];

  if (password.length < 8) {
    suggestions.push("Consider making the password at least 8 characters long.");
  }

  if (!/[A-Z]/.test(password)) {
    suggestions.push("Add at least one uppercase letter.");
  }

  if (!/[a-z]/.test(password)) {
    suggestions.push("Add at least one lowercase letter.");
  }

  if (!/[0-9]/.test(password)) {
    suggestions.push("Include at least one number.");
  }

  if (!/[^A-Za-z0-9]/.test(password)) {
    suggestions.push("Use at least one special character (e.g., !,@,#,$).");
  }

  if (suggestions.length === 0) {
    suggestions.push("Password is strong. Great job! consider writing it down on paper, dont be an idiot");
  }

  return suggestions.join("<br>");
}

function generatePasswordAlternatives(password) {
  var alternatives = [];

  // Example of generating alternatives 
  if (password.length > 3 && /[A-Za-z]/.test(password) && /[0-9]/.test(password)) {
    var prefix = password.charAt(0).toUpperCase() + password.slice(1, -1);
    var suffix = password.slice(-1);
    var number = Math.floor(Math.random() * 10000);
    var alternative = prefix + number + suffix;
    alternatives.push("Possible alternative: " + alternative);
  }

  return alternatives.join("<br>");
}

function togglePasswordVisibility() {
  var passwordInput = document.getElementById("passwordInput");
  var showPasswordBtn = document.getElementById("showPasswordBtn");
  
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    showPasswordBtn.textContent = "Hide Password";
  } else {
    passwordInput.type = "password";
    showPasswordBtn.textContent = "Show Password";
  }
}

function refreshPassword() {
  var passwordInput = document.getElementById("passwordInput");
  var strengthIndicator = document.getElementById("strengthIndicator");
  var passwordSuggestions = document.getElementById("passwordSuggestions");
  
  passwordInput.value = ""; // Clear password input
  strengthIndicator.innerHTML = ""; // Clear strength indicator
  passwordSuggestions.innerHTML = ""; // Clear password suggestions
}