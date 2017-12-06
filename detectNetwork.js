// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

var prefix1 = cardNumber.substring(0,1);
var prefix2 = cardNumber.substring(0,2);
var prefix3 = cardNumber.substring(0,3);
var prefix4 = cardNumber.substring(0,4);
var cnl = cardNumber.length; 

if ((prefix2 === '38' || prefix2 === '39') && cnl === 14) {
	return 'Diner\'s Club';
}

if ((prefix2 === '34' || prefix2 === '37') && cnl === 15) {
	return 'American Express';
}

if (prefix1 === '4' && (cnl === 13 || cnl === 16 || cnl === 19)) {
	return 'Visa'
}

if ((parseInt(prefix2) > 50 && parseInt(prefix2) < 56) && cnl === 16) {
	return 'MasterCard';
}

if ((prefix4 === '6011' || parseInt(prefix3) > 643 && parseInt(prefix3) < 650 || prefix2 === '65') && (cnl === 16 || cnl === 19)) {
	return 'Discover';
}

if ((prefix4 === '5018' || prefix4 === '5020' || prefix4 === '5038' || prefix4 === '6304') && (cnl > 11 && cnl < 20)) {
	return 'Maestro'
}





// Once you've read this, go ahead and try to implement this function, then return to the console.
};
