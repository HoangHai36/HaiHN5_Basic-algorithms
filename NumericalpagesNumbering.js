function pagesNumbering(n){
  let digits = 0;
  for(let i = 1; i<=n; i *= 10){
    digits += (n-i+1);
  }
  return digits;
}
pagesNumbering(10)
