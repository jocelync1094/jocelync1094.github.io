var password = {
    number: "1234567890",
    lowerCase: "abcdefghijklmnopqrstuvwxyz",
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    specialChar: "!\"#$%&\'\u0028\u0029*\\+,-./:;<=>?@\u005B\u005D^_`\u007B|\u007D~",
}
var lengthValidate = true;


// obtaining user input for password length and data validation
while(lengthValidate){
var passwordLength = prompt("How long would you like your password to be? (Must be between 8-128 characters)");
if (passwordLength < 8 || passwordLength > 128){
   alert("Invalid Entry. Please enter a number from 8-128.");
}else {
   lengthValidate=false;
   
}
}

//saving user password type preference and data validation
var isNumbers = confirm("Do you want numbers in your password?");
var isLowerCase= confirm("Do you want lowercase letters in your password?");
var isUpperCase = confirm("Do you want uppercase letters in your passowrd?");
var isSpecialChar = confirm("Do you want special characters in your password?");

var generateBtn = document.querySelector("#generate");
var passwordTextArea = document.querySelector("#password");
var copyBtn = document.querySelector("#copy");

const numbersConst = 0;
const lowerCaseConst = 1;
const upperCaseConst = 2;
const specialConst = 3;

//creating the password

generateBtn.addEventListener("click",generatingPassword);

function generatingPassword (){
    var generatedPassword = "";
    for (var i = 0; i <= (passwordLength-1) ; i++){
    var charType = determiningChar();
    generatedPassword = generatedPassword + randomChar(charType);
    }
    passwordTextArea.textContent = generatedPassword;
}

//determining the character type at the password position


function determiningChar (){

    x =  Math.floor(Math.random() * 4);
    while(true){
        if (x === numbersConst){
            if(isNumbers){
            return x;
            }else {
                x++
            }
        } 
        if (x === lowerCaseConst){
            if(isLowerCase){
            return x;
            }else {
                x++
            }
        } 
        if (x === upperCaseConst){
            if(isUpperCase){
            return x;
            }else {
                x++
            }
        } 
        if (x === specialConst){
            if(isSpecialChar){
            return x;
            }else {
                x=0;
            }
        } 
     
    }
}

//randomizing the character at the position
function randomChar (x){
    if (x===numbersConst){
        position = Math.floor(Math.random() * password.number.length);
        var randomCh = password.number[position];
        return randomCh;
    } else if(x===lowerCaseConst){
        position = Math.floor(Math.random() * password.lowerCase.length);
        var randomCh = password.lowerCase[position];
        return randomCh;
    }else if(x===upperCaseConst){
        position = Math.floor(Math.random() * password.upperCase.length);
        var randomCh = password.upperCase[position];
        return randomCh;
    }else if(x===specialConst){
        position = Math.floor(Math.random() * password.specialChar.length);
        var randomCh = password.specialChar[position];
        return randomCh;
    }
}

//copy function
copyBtn.addEventListener("click",copyToClip);

function copyToClip (){
    passwordTextArea.select();
    document.execCommand('copy');
}
