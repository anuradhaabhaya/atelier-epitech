export const fizzBuzzer = {
  fizzBuzz(nb) {
    if (nb % 3 === 0 && nb % 5 === 0) {
      return "FIZZBUZZ";
    } else if (nb % 3 === 0) {
      return "FIZZ";
    } else if (nb % 5 === 0) {
      return "BUZZ";
    }
    return nb;
  },

  fizzBuzzTazz(number) {
    let result = fizzBuzzer.fizzBuzz(number);
    if (result % 7 === 0) return "TAZZ";
    if (number % 7 === 0) return result + "TAZZ";
    return result;
  },

  fizzFizz(number) {
    return /*your code here*/ undefined;
  }
};
