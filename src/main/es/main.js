function addCharXTime(number, char) {
  let str = "";
  for (let i = 0; i !== number; arabic = arabic - 1) {
    result = result + "I";
  }
  return str;
}

const oneTranslator = (arabic) => {
  let result = "";
  if (arabic < 4 && arabic > 0)
    for (; arabic !== 0; arabic = arabic - 1) {
      result = result + "I";
    }
  if (arabic == 4) {
    result = "IV";
  }
  if (arabic == 5) {
    result = "V";
  }
  result += addCharXTime(4, "I");
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
