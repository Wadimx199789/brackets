module.exports = function check(str, bracketsConfig) {
  let array = [];
  for (let i = 0; i < bracketsConfig.length; i++) {
    array = array.concat(bracketsConfig[i]);
  }

  let toClose = [];
  for (let j = 0; j < str.length; j++) {
    let last = toClose[toClose.length - 1];
    if (array.indexOf(str[j]) % 2 == 0 && str[j] == array[array.indexOf(str[j]) + 1]) {
      if (last !== str[j]) {
        toClose.push(str[j]);
      } else if (last == str[j]) {
        toClose.pop();
      }
    } else if (array.indexOf(str[j]) % 2 == 0) {
      toClose.push(str[j]);
    }
    if (array.indexOf(str[j]) % 2 !== 0) {
      if (array.indexOf(last) == array.indexOf(str[j]) - 1) {
        toClose.pop()
      } else {
        return false
      }
    }
  }
  if (toClose.length == 0) return true;
  else return false;
}