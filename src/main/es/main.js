const oneTranslator = (arabic) => {
    let result = "";
    if (arabic < 4 && arabic > 0)
      for (; arabic !== 0; arabic = arabic - 1) result = result + "I";
    return result;
};

export const romanConverter = {
  toRoman(arabic) {
    return oneTranslator(arabic);
  },
  fromRoman(roman) {
    return /*your code here*/ undefined;
  }
};
