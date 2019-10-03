function sortByLength(inputArray){
  inputArray.sort( (a,b)=> a.length - b.length);
  return inputArray;
}
sortByLength(["aaa", "vva", "zz"]);
