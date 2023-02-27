module.exports = function check(str, bracketsConfig) {
  // your solution
  let result = [];

  for (let br of str) {
    let bracketsConfigIndex = bracketsConfig.indexOf(br);

    if (bracketsConfigIndex === -1) {
      continue;
    }

    if (bracketsConfigIndex % 2 === 0) {
      result.push(bracketsConfigIndex + 1);
    } else {
      if (result.pop() !== bracketsConfigIndex) {
        return false;
      }
    }
  }
  return result.length === 0;
};
