function divides(n){
    let result = [];
      for(let i=2;i<=n;i++){
        if(n%i==0){
          result.push(i);
        }
      }
      return result;
  }
  function isPrime(n){
    let result = true;
    if(n==2) {result = false} else {
    for(let i=2; i<n;i++){
      if(n%i==0) {
        result = false;
        break;
      } 
    }
    }
    return result;
  }
  function greatestCommonPrimeDivisor(a, b){
        let result = -1;
        let arr1 = divides(a);
        let arr2 = divides(b);
        let so1 = arr1.filter(value => {return isPrime(value) == true});
        let so2 = arr2.filter(value => {return isPrime(value) == true});
        for(let i = so1.length - 1; i>=0; i--){
          for(let j = so2.length - 1; j>=0; j--){
            if(so1[i] == so2[j]){
              result = so1[i];
              break;
            }
          }
        }
         return result;
  }
  greatestCommonPrimeDivisor(100,140);
