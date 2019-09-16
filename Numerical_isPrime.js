function isPrime(n){
    var result = true;
      if(n<=0 || n>1000) {
          return false;
      } else if(n == 1) {
          return true;
      } else {
          for(let i=2;i<n;i++){
              if(n%i == 0){
                  result = false;
                  break;
              } 
          }
          return result;
      }
  }
  isPrime(7); --return true.
