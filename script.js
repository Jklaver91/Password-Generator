// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  console.log("suh");

  var PassConfirm = window.confirm("Would you like to generate a password?");
        if (PassConfirm) {
          CapChar();
    }
    else {
      window.alert("You did not pick a valid option. Try again.");
    }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var CapChar = function() {
  // ask player what they'd like to do
   CapitalChar = window.confirm("Would you like to use Capital-case characters?");
        if (CapitalChar) {
          console.log(CapitalChar);
          LowChar();
    }
    else {
      console.log(CapitalChar);
      LowChar();
    }
    
}

var LowChar = function() {
  // ask player what they'd like to do
  LowerChar = window.confirm("Would you like to use Lower-case characters?");
        if (LowerChar) {
          console.log(LowerChar);
          SpecChar();
    }
    else {
      console.log(LowerChar);
      SpecChar();
    }

}

var SpecChar = function() {
  // ask player what they'd like to do
  SpecialChar = window.confirm("Would you like to use special characters?");
        if (SpecialChar) {
          console.log(SpecialChar);
          CharacterAmount();
    }
    else {
      console.log(SpecialChar);
      CharacterAmount();
    }
}

var CharacterAmount = function() {
  // ask player what they'd like to do
   var CharacterAmount = window.prompt(
    "How many characters long do you want your password to be? (8-128)"
  );

  // convert answer from prompt to an actual number
  CharacterAmount = parseInt(CharacterAmount);
  console.log(CharacterAmount);
 
    if (SpecialChar && LowerChar && CapitalChar){
      chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    else if (SpecialChar && LowerChar && !CapitalChar) {
      chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()";
    }
    else if (SpecialChar && !LowerChar && !CapitalChar) {
      chars = "0123456789!@#$%^&*()";
    }
    else if (SpecialChar && !LowerChar && CapitalChar) {
      chars = "0123456789!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    else if (SpecialChar && LowerChar && !CapitalChar) {
      chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()";
    }

    else if (!SpecialChar && LowerChar && CapitalChar) {
      chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    
    else if (!SpecialChar && LowerChar && !CapitalChar) {
      chars = "0123456789abcdefghijklmnopqrstuvwxyz";
    }
    
    else if (!SpecialChar && !LowerChar && CapitalChar) {
      chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    
    else if (SpecialChar && !LowerChar && CapitalChar) {
      chars = "0123456789!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    
    else if (!SpecialChar && LowerChar && CapitalChar) {
      chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    else {
      window.confirm("Please, try again with correct parameters!");
    }
  
    var passwordLength = CharacterAmount -1;
    password = "";
    
    for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber +1);
    }
    document.getElementById("password").value = password;
  }

