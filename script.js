// Assignment Code
let generateBtn = document.querySelector("#generate");

function generatePassword() {
  let length = parseInt(prompt("Choose characters length between 8 and 128"))
  let upperCase = confirm("Do you want upper case characters?")
  let lowerCase = confirm("Do you want lower case characters?")
  let nums = confirm("Do you want numbers?")
  let symbol = confirm("Do you want symbols?")
  let upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let lowerChar = "abcdefghijklmnopqrstuvwxyz"
  let numsChar = "0123456789"
  let symbolChar = ")(*!@#$%^&?><+="


  if (length != 128 || length != 8) {
    let newPass = ""
    let newPassChar = ""

    if (upperCase) {
      newPassChar += upperChar
      newPass += upperChar[Math.floor(Math.random() * upperChar.length)]
    }
    if (lowerCase) {
      newPassChar += lowerChar
      newPass += lowerChar[Math.floor(Math.random() * lowerChar.length)]
    }
    if (nums) {
      newPassChar += numsChar
      newPass += numsChar[Math.floor(Math.random() * numsChar.length)]
    }
    if (symbol) {
      newPassChar += symbolChar
      newPass += symbolChar[Math.floor(Math.random() * symbolChar.length)]
    }
 
    let newLength = length - newPass.length

    for (let i = 0; i < newLength; i++) {
      let newChar = newPassChar[Math.floor(Math.random() * newPassChar.length)]
      newPass += newChar
    }
    return newPass
  } else {
    alert("Not enough characters.")
  }
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector('#password');

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


















// Below is my orginal attempt at this HW. I wanted to show my Work. i was having a difficult time having this code run and after rewatching lecture i decided to start from scratch

// const length = prompt('How many characters would you like?')
// if (length < 8 || length > 128) {
//   alert ('Password too short/long')
// }
// if (length > 8 || length < 128) {
//   let upperCase = confirm ('Would you like capital letters?')
//   let lowerCase = confirm ('Would you like lower case letter?')
//   let numbers = confirm ('Would you like numbers?')
//   let special = confirm ('Would you like special characters')
// }
// if (upperCase != true && lowerCase != true && numbers != true && special != true) {
//   alert("You must select at least one character type!")
//   }

// function lowerCase() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
// }

// function upperCase() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
// }

// function numbers() {
//   return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
// }

// function special() {
//   const special = '!@#$%^&*(){}[]=<>/,.';
//   return special [Math.floor(Math.random() * special.length)];
// }
// let generateBtn = document.querySelector("#generate");

// function generatePassword () {
//   lowerCase(), upperCase(), numbers(), special() ``
// }

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword(lowerCase+upperCase+numbers+special);
//   var passwordText = document.querySelector("#password");
//   writePassword()
//   passwordText.value = password;
//   for (let i = 0; i < generatePassword.length; i++)
// }
// // Add event listener to generate button
// // generateBtn.addEventListener("click", writePassword);