function zeros(n) {
  // your code here  
  let result = 0;
  let lastFac = 1;
  for (let index = 1; index < n + 1; index++) {
    lastFac *= index;
    while (lastFac % 10 == 0) {
      result++;
      lastFac /= 10;
    }
    lastFac = lastFac % 10;

  }

  while (lastFac % 10 == 0) {
    result++;
    lastFac /= 10;
  }

  return result;
}

module.exports = {
  zeros
}