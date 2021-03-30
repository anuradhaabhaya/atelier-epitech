export const rpn = {
  additions(additions) {
    let total;
      for (let i = 0; additions[i]; i++) {
        if(additions[i] == '+') {
            for (let y = i; additions[y] != ' '; y--) {
                
            }
        }
      }
    return 1;
  },
  subtractions(subtractions) {
    return /* TODO: part 2 */ undefined;
  },
  multiplications(multiplications) {
    return /* TODO: part 3 */ undefined;
  },
  divisions(divisions) {
    return /* TODO: part 4 */ undefined;
  },
  compute(operations) {
    return /* TODO: last part !! */ undefined;
  }
};
