function NumMax(text){

    var array = text.split("");
    var num = "";
    var result = [];

    for(var i of array){
        if (i == i.toUpperCase()){
            num += i;
        }
        else{
            num == "" || result.push(parseInt(num));
            num = "";
        }

    }
    return result.length > 0 ? Math.max(...result) : "Not found number" ;
}
console.log(NumMax("p10hoom"));
console.log(NumMax("30h1ello2"));
console.log(NumMax("hello"));