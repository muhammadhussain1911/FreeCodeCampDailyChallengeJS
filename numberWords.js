let tens = [
  "ten",
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];
let basicNumbers = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];
let teens = [
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];

function getNumberWords(n) {
  if (n >= 0 && n < 100) {
    if (n === 0) return basicNumbers[0];
    if (n > 0 && n < 10) {
      return basicNumbers[n];
    }
    if (n > 10 && n < 20) {
      return teens[n - 10];
    }
    if (n % 10 === 0) {
      if (n >= 10 && n < 100) {
        return tens[n / 10 - 1];
      }
    }

    if (n > 20 && n < 100) {
      const splittedNumber = n.toString().split("");
      let finalJoinedWord = "";
      for (let i = 0; i < splittedNumber.length; i++) {
        if (i === 0) {
          finalJoinedWord += `${tens[Number(splittedNumber[i]) - 1]}`;
        } else {
          finalJoinedWord += `-${basicNumbers[Number(splittedNumber[i])]}`;
        }
      }
      return finalJoinedWord;
    }
  } else {
    return "Invalid Number";
  }
}

console.log(getNumberWords(121));
