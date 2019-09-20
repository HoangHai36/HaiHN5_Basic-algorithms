function formatString(input){
  let inputString = input.trim().split("");
  let result = "";
  for(let i=1; i<inputString.length-1;i++){
    while(inputString[i] == " " && inputString[i+1] == " "){
      inputString.splice(i,1);
    }
  }
  return inputString.join("");
}

formatString("   H     ai  hai")
