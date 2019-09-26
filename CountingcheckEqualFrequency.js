function checkEqualFrequency(inputArray){
  let arr = [];
  inputArray.map((value)=>{
    if(arr.indexOf(value) === -1){
      arr.push(value);
    } 
  })
  let count = 0;
  let newArr = [];
  for(let i =0; i<arr.length;i++){
    for(let j = 0; j<inputArray.length;j++){
      if(arr[i]===inputArray[j]){
        count++;
      }
    }
    if(newArr.indexOf(count) === -1){
    newArr.push(count);
    }
    count = 0;
  }
  if(newArr.length === 1){
    return true;
  } 
  return false;
}
checkEqualFrequency([34, 23, 33, 23]);
