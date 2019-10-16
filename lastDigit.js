function lastDigit(a, b){
    let last = a;
    let i =2;
    while (i<=b) {
        last= (last*a)%10;
        i++;
    }
    return last;
}
