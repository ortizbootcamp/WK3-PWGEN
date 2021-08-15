// Assignment Code

// Pseudo: WHEN user clicks button -> THEN prompt appears
// WHEN prompt appears -> THEN user selects PW length
// (If user inputs an invalid length, the msg "Hey! Read the PW length critera. Or else." displays.)
// WHEN user sets valid character length -> THEN length is validated, stored
// WHEN next prompt appears -> THEN user selects 'Y/N'/'CONFIRM/DECLINE' for designated chartype
// Repeat for other chartypes: lowercase, uppercase, numeric, special from list (!,?,$,%,@)
// WHEN user selects 'Yes/Confirm' for a chartype -> THEN that chartype is validated, stored
// WHEN all prompts answered -> THEN PW is generated according to confirmed critera
// WHEN PW is generated -> THEN PW is displayed


// Declare characters
var upperC = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerC = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numeric = ['1','2','3','4','5','6','7','8','9','0'];
var sChar = ['!','?','$','%','@'];

var generateBtn = document.querySelector("#generate");

// Ask/Store Criteria

function askUserCriteria() {

//LENGTH

var length = parseInt(
prompt("Let me know how long you would like your password to be! Make sure to input a number value between 8-128."),
10
);

if  (length<8) {
  alert("Hey! Your input can't be less than 8. Read the PW length critera. Or else.")
  return null;
}

if (length>128) {
  alert("Hey! Do you really want a password that's MORE than 128 characters?? NO! Read the PW length critera. Or else.")
  return null;
}

if (Number.isNaN(length)) {
  alert("Hey! Your input needs to be a NUMBER. Read the PW length critera. Or else.")
  return null;
}

// lower
var lowercConfirm = confirm(
  "If you'd like your password to have lowercase letters - ex. 'abcde' - then press 'OK'."
)

// upper
var uppercConfirm = confirm(
  "If you'd like your password to have letters UPPERCASE - ex. 'ABCDE' - then press 'OK'."
)

// numbers
var numConfirm = confirm(
  "Would you care for some numbers - ex. 1 2 3 4 5 - in your password? Then press 'OK'."
)

// special
var scharConfirm = confirm(
  "For some extra ~spice~, would you like some of these choice special characters in your password: (!, ?, $, %, @) If you would, press 'OK'."
)

var userCriteria = {
    length: length,
    lowercConfirm: lowercConfirm,
    uppercConfirm: uppercConfirm,
    numConfirm: numConfirm,
    scharConfirm: scharConfirm,

};
return userCriteria;
}

// random criteria

function getRandom(crit) {
  var rMeasure = Math.floor(Math.random()*crit.length);
  var rElement = crit[rMeasure];

  return rElement;
}

// ~generate~

function genUserPW() {
  var criteria = askUserCriteria();

  //chosen

  var userChar = [];

  //for sure chars, one of each

  var eachChar = [];
  var outcome = [];

  if (criteria.lowercConfirm) {
    userChar = userChar.concat(lowerC);
    eachChar.push(getRandom(lowerC));
  }
  if (criteria.uppercConfirm) {
    userChar = userChar.concat(upperC);
    eachChar.push(getRandom(upperC));
  }
  if (criteria.numConfirm) {
    userChar = userChar.concat(numeric);
    eachChar.push(getRandom(numeric));
  }
  if (criteria.scharConfirm) {
    userChar = userChar.concat(sChar);
    eachChar.push(getRandom(sChar));
  }

  for (var i = 0; i < criteria.length; i++) {
    var userChars = getRandom(userChar);
    outcome.push(userChars);
  }

  for (var i = 0; i < eachChar.length; i++) {
    outcome[i] = eachChar[i];
  }
  return outcome.join("");
}

// Write password to the #password input
var generateBtn = document.querySelector("#generate")

function writePassword() {
  var password = genUserPW();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
