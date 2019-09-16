function maxFraction(numerators, denominators){
    let max = numerators[0]/denominators[0];
    let index = 0;
    for(let i = 0; i<numerators.length;i++){
        if(max<(numerators[i]/denominators[i])){
          max = numerators[i]/denominators[i];
          index = i;
        }
    }
    return index;
}
maxFraction([1, 2], [4, 3]);
