function primeSum(n){
  let sum = 0;
  let arr = [true, true];
  arr[2] = true;
  for(let i = 2; i<=n; i++){
    arr[i] = true;
  }
  for(let i =2; i<=n; i++){
    if(arr[i] === true){
      for(let j = 2*i; j<=n; j+=i){
        arr[j] = false;
      }
    }
  }
  for(let i =2; i<=n; i++){
    if(arr[i] === true) {
      sum += i;
    }
  }
  return sum;
}
primeSum(10000);
