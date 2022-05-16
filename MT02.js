function HighestDigit(number){
    let HighestDigit = 0;
    let i = 0;

    while(number >= 1){
        i = number % 10;
        if(HighestDigit < i ){
            HighestDigit = i;
        }
        number = Math.floor(number/10);
    }
    return HighestDigit;
}


console.log(HighestDigit(379));
console.log(HighestDigit(2));
console.log(HighestDigit(377401));