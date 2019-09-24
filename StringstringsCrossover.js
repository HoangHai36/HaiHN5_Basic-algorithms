function stringsCrossover(inputArray, result){
  let count = 0;
  for (let i = 0;i<inputArray.length;i++){
    for(let j = i+1;j<inputArray.length;j++){
      let char1 = inputArray[i];
      let char2 = inputArray[j];
      let bool = true;
      for(let k=0; k<result.length;k++){
        if(result[k] != char1[k] && result[k] !=char2[k]){
          bool = false;
          break;
        }
      } 
        if(bool){
          count +=1;
        }
     
    }
  }
  return count;
}
inputArray = ["abc", "aaa", "aba", "bab"];
stringsCrossover(inputArray,"bbb");
