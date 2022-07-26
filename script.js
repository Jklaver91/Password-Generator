// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");
  console.log("suh");
  
  // passwordText.value = password;

  var PassConfirm = window.confirm("Would you like to generate a password?");
        if (PassConfirm) {
          SpecChar();
    }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


var SpecChar = function() {
  // ask player what they'd like to do
  var PassConfirm = window.confirm("Would you like to use special characters?");
        if (PassConfirm) {
          CharacterAmount();
    }
    else {
      CharacterAmount();
    }
}

var CharacterAmount = function() {
  // ask player what they'd like to do
  var CharacterAmount = window.prompt(
    "How many characters long do you want your password to be? (6-12)"
  );

  // convert answer from prompt to an actual number
  CharacterAmount = parseInt(CharacterAmount);

  switch (CharacterAmount) {
    case 6:
      console.log("6");
      break;
    case 7:
      console.log("7");
      break;
    case 8:
      console.log("8");
      break;
    case 9:
      console.log("9");
      break;
    case 10:
      console.log("10");
      break;
    case 11:
      console.log("11");
      break;
    case 12:
      console.log("12");
      break;
    default:
      window.alert("You did not pick a valid option. Try again.");
      break;
  }
}