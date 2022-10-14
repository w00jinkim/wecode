function evenNum(num) {
  let arr = [];
  for (let i = 0; i < num.length; i++) {
    if (num % 2 === 0) {
      arr = arr.push(num[i]);
    }
    return arr;
  }
}
