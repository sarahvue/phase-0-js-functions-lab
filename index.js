function calculateTax(amount) {
  let taxValue = amount * 0.1;
  return taxValue;
}

function convertToUpperCase(text) {
  let newText = text.toUpperCase();
  return newText;
}

function findMaximum(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

function isPalindrome(word) {
  let reversed = word.split("").reverse().join("");
  if (word == reversed) {
    return true;
  } else {
    return false;
  }
}

function calculateDiscountedPrice(originalPrice, discountPercentage) {
    let discount = discountPercentage * originalPrice;
    let newPrice = originalPrice - discount;
    return newPrice;
}

// This is required for the test to function properly
module.exports = {
  calculateTax,
  convertToUpperCase,
  findMaximum,
  isPalindrome,
  calculateDiscountedPrice,
};
