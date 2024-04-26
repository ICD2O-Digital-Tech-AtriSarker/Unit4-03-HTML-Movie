
// ELEMENTS
// Get Elements from index.html
const ageInput = document.getElementById('ageInput');
const outputResult = document.getElementById('outputResult');
const inputForm = document.getElementById('inputForm');

function getResult() {

  // Get user input, years of age
  let age = Number(ageInput.value);

  // When the user’s age allows them to go to an R-rated movie alone
  // When the user’s age allows them to go to a PG-13 movie alone
  // When the user’s age allows them to go to a G or PG movie alone
  // When the user’s age does not allow them to go to a movie alone
  // When the user’s age is a decimal, web page should not allow this entry
  // When the user’s age is a negative number, web page should not allow this entry
  // When nothing is entered, web page should ask them to please input their age.
  let message = "";
  if (isNaN(age)) {
    message = "Please Enter Input!";
  }
  else if (age <= 0) {
    message = "Please Enter Positive Input!";
  }
  else if (age % 1 != 0) {
    message = "Please Enter Positive Integer!";
  }
  else if (age >= 17) {
    message = "Allowed to see R-rated movies alone!";
  }
  else if (age >= 13) {
    message = "Allowed to see PG-13 movies alone!";
  }
  else if (age >= 8) {
    message = "Allowed to see PG movies alone!";
  }
  else {
    message = "Not allowed to see movies alone!";
  }

  // Display result
  outputResult.innerText = message;

  return;
}

// Cool function notation
// form validation + submit call
inputForm.onsubmit = () => {
  getResult();
  return false;
}