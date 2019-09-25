function differentValuesInMultiplicationTable2(n, m){
    let table = [];
    for(let i=1;i<=n;i++){
        for(let j=1;j<=m;j++){
          if(table.indexOf(i*j) === -1){
            table.push(i*j);
          }
        }
    }
    return table.length;
}
differentValuesInMultiplicationTable2(4,4);
