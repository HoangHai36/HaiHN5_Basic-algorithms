function chessBoardCellColor(cell1, cell2){
    let obj = {
        "A": 1,
        "B": 2,
        "C": 3,
        "D": 4,
        "E": 5,
        "F": 6,
        "G": 7,
        "H": 8
    };
    let a = parseInt(obj[cell1.charAt(0)])+parseInt(cell1.charAt(1));
    let b = parseInt(obj[cell2.charAt(0)])+parseInt(cell2.charAt(1));
  return a%2 == b%2;
}
chessBoardCellColor("A1","C3");
