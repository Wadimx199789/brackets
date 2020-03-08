module.exports = function check(str, bracketsConfig) {
  let arr = str.split('');

  for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < bracketsConfig.length; j++) {
    if (arr[i] === bracketsConfig[j][0] && arr[i + 1] === bracketsConfig[j][1]) {
              arr.splice(i, 2);
              i=-1;
          }
  }
  if (arr.length === 0){
          return true;
      }
}

return false;
}
