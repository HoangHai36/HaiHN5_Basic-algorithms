function lineEncoding(s){
  let result ="";
  let count = 1;
  let arr = s.split("");

  for(let i =0;i<arr.length;i++){
    if(i ==(arr.length-1)){
      if(count !== 1){
         result = result.concat(count,arr[arr.length-1]);
      } else {
         result = result.concat(arr[arr.length-1]);
      }
    } else if(arr[i] == arr[i+1]){
     count += 1;
   } else {
     if(count !== 1){
     result = result.concat(count,arr[i]);
     count = 1;
     } else {
     result = result.concat(arr[i]);
     count = 1;
     }
   } 
  }
  return result;
}
lineEncoding("abbcccccd");
