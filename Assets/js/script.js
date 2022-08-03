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
          Numbers();
    }
    else {
      console.log(LowerChar);
      Numbers();
    }

}

var Numbers = function() {

  num = window.confirm("Would you like to use Numericalss?");
        if (num) {
          console.log(num);
          SpecChar();
    }
    else {
      console.log(num);
      SpecChar();
    }

}

//prompt to generate true or false for special characters in password then proceed to Character amount.
var SpecChar = function() {
  SpecialChar = window.confirm("Would you like to use Special-case characters?");
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
   var CharacterAmount = window.prompt("How many characters long do you want your password to be? (8-128)");
   // conditional to make sure password is between 8 and 128 characters 
   if (CharacterAmount > 7 && CharacterAmount < 129) {
      console.log(CharacterAmount);
      // conditionals to determine character pool depending on user choice.
      
      //special
      if (SpecialChar && LowerChar && CapitalChar && num){
        chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()?<>,.;:'[]{}-=+-`~|_ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      }
      else if (SpecialChar && LowerChar && CapitalChar && !num){
        chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()?<>,.;:'[]{}-=+-`~|_ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      }
      else if (SpecialChar && LowerChar && !CapitalChar && num){
        chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()?<>,.;:'[]{}-=+-`~|_";
      }
      else if (SpecialChar && !LowerChar && CapitalChar && num){
        chars = "0123456789!@#$%^&*()?<>,.;:'[]{}-=+-`~|_ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      }
      else if (SpecialChar && !LowerChar && !CapitalChar && num){
        chars = "0123456789!@#$%^&*()?<>,.;:'[]{}-=+-`~|_";
      }
      else if (SpecialChar && LowerChar && !CapitalChar && !num){
        chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()?<>,.;:'[]{}-=+-`~|_";
      }
      else if (SpecialChar && !LowerChar && CapitalChar && !num){
        chars = "!@#$%^&*()?<>,.;:'[]{}-=+-`~|_ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      }
      else if (SpecialChar && !LowerChar && !CapitalChar && !num){
        chars = "!@#$%^&*()?<>,.;:'[]{}-=+-`~|_";
      }

      //lower
      else if (!SpecialChar && LowerChar && CapitalChar && num) {
        chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      }
      else if (!SpecialChar && LowerChar && !CapitalChar && !num) {
        chars = "abcdefghijklmnopqrstuvwxyz";
      }
      else if (!SpecialChar && LowerChar && CapitalChar && !num) {
        chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      }
      else if (!SpecialChar && LowerChar && !CapitalChar && num) {
        chars = "0123456789abcdefghijklmnopqrstuvwxyz";
      }

      //capital
      else if (!SpecialChar && !LowerChar && CapitalChar && !num) {
        chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      }
      else if (!SpecialChar && !LowerChar && CapitalChar && num) {
        chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      }

      // numbers
      else if (!SpecialChar && !LowerChar && !CapitalChar && num) {
        chars = "0123456789";
      }
      else {
        window.confirm("Please, try again with correct parameters!");
      }
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

