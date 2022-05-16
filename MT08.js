function SimplePair(data , ans){
    let Arr = []
    for(let i = 0; i < data.length; i++){
        for(let j = 0; j < data.length; j++){

            if(i != j){
                if(data[i] * data[j] == ans ){
                    Arr.push(data[i],data[j])
                    data.splice(i, 1)
                    data.splice(j, 2)
                }
            }
        }
    }
    if(Arr[0] === undefined) return null;
    return Arr;
}

console.log(SimplePair([1,2,3],3))
console.log(SimplePair([1,2,3],6))
console.log(SimplePair([1,2,3],9))