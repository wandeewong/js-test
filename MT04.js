function TotalVolume(...x){
    let total = 0;
    let num = 1;
    for(let i = 0; i < x.length; i++){
        for(let j = 0; j < x[i].length; j++){
            num *= x[i][j];
        }
        total += num;
        num = 1;
    }
    return total;
}

console.log(TotalVolume([4,2,4],[3,3,3],[1,1,2],[2,1,1]));
console.log(TotalVolume([2,2,2],[2,1,1]));
console.log(TotalVolume([1,1,1]));