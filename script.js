// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  // -We want the password to contain lowercase and upperacase variables
  var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lowercase = 'abcdefghijklmnopqrstuvwxyz'
  // -We also want it to contain number and symbols
  var numbers = '0123456789';
  var symbols = '!@#$%^&*?'
  // -We want variables for the popup window so we can include the above variables and length
  var length = prompt('How many characters do you want your password to be, between 8 and 128 characters?');
  console.log(length)

  if (length < 8 || length > 128) {
    alert('Please choose between 8 and 128')
    return "Please click generate password to start over."
  } else {
    // confirm what they want in their password
    var confirmUppercase = confirm("Would you like to include Uppercase Letters?");
    console.log(confirmUppercase)

    var confirmLowercase = confirm("Would you like to include LowercaseLetters?");
    console.log(confirmLowercase)

    var confirmNumbers = confirm("Would you like to include Numbers?");
    console.log(confirmNumbers)

    var confirmSymbols = confirm("Would you like to include Symbols?");
    console.log(confirmSymbols)

    var passwordPool = []
    if (confirmUppercase) {
      passwordPool.push(uppercase.split(''))
    }

    if (confirmLowercase) {
      passwordPool.push(lowercase.split(''))
    }

    if (confirmNumbers) {
      passwordPool.push(numbers.split(''))
    }

    if (confirmSymbols) {
      passwordPool.push(symbols.split(''))
    }

    var flattenedPool = passwordPool.flat()

    var password = "";

    for (let i = 0; i < length; i++) {
      var random = Math.floor(Math.random() * flattenedPool.length);
      password += flattenedPool[random];
    }

  }



  return password;


};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//when "Generate Password" is clicked we get a "promt" asking what we want in the password
//so we most likely need to do an if (Generate Password is clicked) then (promt popup)
//the alert pop-up will contain a box for length between 8 and 128
//it will ask what characters you want, make them click-able boxes.
//a box for Lowercase, Uppercase, Number, and Symbols
//then you click "ok" or something and it generates the password.

//array is flattend
//crate variable for final password that is going to be retured, not in an array, make sure it is randomized.
//creat a for loop that will randomize or randomly generate the characters, that will be done inside of an array. so then we will turn that array into a string.
//math random, floor loop