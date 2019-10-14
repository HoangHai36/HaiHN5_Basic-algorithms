function sum(n){
  let sum = 0;
  for(let i=1;i<n;i++){
    sum += i;
  }
  return sum;
}

function deleteNumber(n){
  let chan = 0;
  let le = 0;
  let count = 0;
  for(let i =0; i<n.length;i++){
    if(n[i] % 2 == 0){
      chan += 1;
    } else {
      le += 1;
    }
  }
 if(le == 0){
   count = sum(chan);
 } else if(chan == 0 && le %2 !=0){
   count = 0;
 } else if(chan == 0 && le % 2 == 0) {
   count = sum(le);
 } else if(chan != 0 && le % 2 != 0){
   count = chan * le;
 } else if(chan != 0 && le % 2 == 0){count = sum(chan)+ sum(le)}
  return count;
}
deleteNumber([2,4,3,7,5]);
