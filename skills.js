// function that removes non alphanumeric characters and lowercase letters from a string
function removeNonAlphaNumeric(str) {
  return str.replace(/[^A-Z0-9]/g, '');
}

//driver code
console.log(removeNonAlphaNumeric('abc123abvc')); // abc123
console.log(removeNonAlphaNumeric('abc123#abc')); // abc123
console.log(removeNonAlphaNumeric('abc123#ABC')); // abc123ABC

