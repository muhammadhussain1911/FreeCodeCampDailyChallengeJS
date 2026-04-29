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

function getNumberWords(n) {
  if (n === 0) return basicNumbers[0];
  if (n > 0 && n < 10) {
    switch (n) {
      case 1:
        return "one";
      case 2:
        return "two";
      case 3:
        return "three";
      case 4:
        return "four";
      case 5:
        return "five";
      case 6:
        return "six";
      case 7:
        return "seven";
      case 8:
        return "eight";
      case 9:
        return "nine";
      case 10:
        return "ten";
      case 11:
        return "eleven";
      case 12:
        return "twelve";
      case 13:
        return "thirteen";
      case 14:
        return "fourteen";
      case 15:
        return "fifteen";
      case 16:
        return "sixteen";
      case 17:
        return "seventeen";
      case 18:
        return "eighteen";
      case 19:
        return "nineteen";
    }
  }
  if (n > 19 && n < 91) {
    if (n % 10 === 0) {
      switch (n) {
        case 20:
          return "twenty";
        case 30:
          return "thirty";
        case 40:
          return "forty";
        case 50:
          return "fifty";
        case 60:
          return "sixty";
        case 70:
          return "seventy";
        case 80:
          return "eighty";
        case 90:
          return "ninety";
      }
    }
  }
  if (n > 20 && n < 100) {
    const splittedNumber = n.toString().split("");
    let finalJoinedWord = "";
    for (let i = 0; i < splittedNumber.length; i++) {
      switch (i) {
        case 0:
          finalJoinedWord += tens[Number(splittedNumber[i]) - 1];
          break;
        case 1:
          finalJoinedWord += `-${basicNumbers[Number(splittedNumber[i])]}`;
          break;
      }
    }
    return finalJoinedWord;
  }

  return n;
}

console.log(getNumberWords(21));
