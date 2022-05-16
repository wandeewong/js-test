function remove(R){
    for(let i = 0; i < R.length; i++){
        for(let j = 0; j < R.length; j++){
            if(i != j){
                if(R[i] == R[j]){
                    R.splice(j,1)
                }
            }
        }
    }
    return (R);
}

console.log(remove([1,0,1,0]))
console.log(remove(["The","big","cat"]))
console.log(remove(["John","Tylor","John"]))
