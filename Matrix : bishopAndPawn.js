function bishopAndPawn(bishop, pawn){
    let obj = {
        "a": 1,
        "b": 2,
        "c": 3,
        "d": 4,
        "e": 5,
        "f": 6,
        "g": 7,
        "h": 8
    };
    if(bishop === pawn){return false};
    let a = parseInt(obj[bishop.charAt(0)])-parseInt(obj[pawn.charAt(0)]);
    let b = parseInt(bishop.charAt(1))-parseInt(pawn.charAt(1));
  return Math.abs(a) == Math.abs(b);
}
bishopAndPawn("a5","c3");
