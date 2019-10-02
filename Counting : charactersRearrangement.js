function charactersRearrangement(string1, string2){
    let arr1 = string1.split("");
    let arr2 = string2.split("");
    while(arr2.indexOf(arr1[0]) !== -1){
        arr2.splice(arr2.indexOf(arr1[0]),1);
        arr1.splice(0,1);
        if(arr1.length == 0 && arr2.length == 0){
            return true;
        }
    }
    return false;
}
console.log(charactersRearrangement("a","b"));
