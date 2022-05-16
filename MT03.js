function CapToFront(str){
    let msg = str.split("");
    let upperFornt = "";
    let lowerFornt = "";

    for(let i of msg){
        if(i == i.toUpperCase()){
            upperFornt += i ;
        }
        else{
            lowerFornt += i;
        }
    }
    return(upperFornt + lowerFornt);
}

console.log(CapToFront("hApPy"));
console.log(CapToFront("moveMENT"));
console.log(CapToFront("shOrtCAKE"));