function perimeter(n) {
  const fibArray = fib(n);
  return fibArray.reduce((prev, curr) => {
    return prev + curr;
  }) * 4;
}

const fib = (n) => {
  let fibArry = [0, 1];
  for (let index = 0; index < n; index++) {
    const element = fibArry[index] + fibArry[index + 1];
    fibArry.push(element);
  }
  return fibArry;
}

module.exports = {
  perimeter
}