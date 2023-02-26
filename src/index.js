module.exports = function check(str, bracketsConfig) {
  let arr = [];
  let strLength = str.length;
  for (let i = 0; i < strLength; i++) {
    let arrayLength = arr.length;
    const x = bracketsConfig.find(bracketsConfig => bracketsConfig.includes(str[i]));
    x[0] === arr[arrayLength - 1] && x[1]=== str[i] ? arr.pop() : arr.push(str[i]);
  }
  return (arr.length === 0);
}
