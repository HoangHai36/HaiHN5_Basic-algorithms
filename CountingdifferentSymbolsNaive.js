function differentSymbolsNaive(s){
  let inputArray = s.split("");
  let arr = [];
  inputArray.map((value)=>{
    if(arr.indexOf(value) === -1){
      arr.push(value);
    } 
  })
  return arr.length;
}
differentSymbolsNaive("aaaaaaaaaaaa");
