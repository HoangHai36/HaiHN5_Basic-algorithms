function digitsProduct(product) {
    if (product < 10 && product > 0){
      return product;
    }
    if(product == 0) return 10;
    let string = "";
    for(let i = 9; i > 1; i--) {
        while (product % i == 0) {
            product /= i;
            string = string.concat(i);
        }
    }
    if(product !=1) return -1;
    let result = "";
    for(let i= string.length - 1; i>=0 ; i--){
      result = result.concat(string.charAt(i))
    }
    return parseInt(result);
};
digitsProduct(12);
