const isOp = (value) => {
  let arr = ["+", "-", "*", "/"];

  if (arr.includes(value)) return true;
  return false;
};

export const rpn = {
  additions(additions) {
    let arr;
    arr = additions.split(" ");

    return parseInt(arr[0], 10) + parseInt(arr[1], 10);
  },
  subtractions(subtractions) {
    let arr;
    arr = subtractions.split(" ");

    return parseInt(arr[0], 10) - parseInt(arr[1], 10);
  },
  multiplications(multiplications) {
    let arr;
    arr = multiplications.split(" ");

    return parseInt(arr[0], 10) * parseInt(arr[1], 10);
  },
  divisions(divisions) {
    let arr;
    arr = divisions.split(" ");

    return parseInt(arr[0], 10) / parseInt(arr[1], 10);
  },
  compute(operations) {
    let digits_array;
    let sign_array;

    for (const tmp in operations.split(" ")) {
      if (isOp(tmp)) sign_array += tmp;
      if (Number.isInteger(tmp)) digits_array += tmp;
    }
    let result = 0;
    let digit_index = 0;
    for (const tmp in sign_array) {
      if (tmp == "+")
        rpn.additions(
          digits_array[digit_index] + " " + digits_array[digit_index + 1] + " +"
        );
      digit_index += 2;
    }
  }
};
