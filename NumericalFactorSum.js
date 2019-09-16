function factorSum(n) {
  let sum = 0;
  if (n == 4) {
    return 4;
  }
  let result = true;
  if (n >= 2 && n <= 200) {
    for (let i = 2; i <= n; i++) {
      while (n % i == 0) {
        sum += i;
        n /= i;
      }
    }
  }
  for (let i = 2; i < sum; i++) {
    if (sum % i == 0) {
      result = false;
      break;
    }
  }
  if (result == false) {
    return factorSum(sum);
  } else {
    return sum;
  }
}

factorSum(4);
