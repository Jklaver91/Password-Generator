var generateBtn = document.querySelector("#generate");

//event to listen for button click
generateBtn.addEventListener("click", writePassword);

//Begin password generation prompt
function writePassword() {

  var PassConfirm = window.confirm("Would you like to generate a password?");
        if (PassConfirm) {
          CapChar();
    }
    else {
      window.alert("You did not pick a valid option. Try again.");
    }

}

//prompt to generate true or false for capital characters in password then proceed to LowChar.
var CapChar = function() {
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

//prompt to generate true or false for lower case characters in password then proceed to SpecChar.
var LowChar = function() {

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

//prompt to generate true or false for special characters in password then proceed to Character amount.
var SpecChar = function() {
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

//prompt to determine how long the password will be.
var CharacterAmount = function() {
   var CharacterAmount = window.prompt(
    "How many characters long do you want your password to be? (8-128)"
  );
  console.log(CharacterAmount);
    // conditionals to determine character pool depending on user choice.
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
    
    password = "";
    //gererates password by using math.random, the character amount, the char pool 
    for (var i = 0; i < CharacterAmount ; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber +1);
    }
    //prints password in html using the ID password
    document.getElementById("password").value = password;
  }

