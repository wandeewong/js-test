function test(text){
    let number ="";
    let txt = "";
    for(var i=0;i<text.length;i++){
        if(text[i]==1||text[i]==2||text[i]==3||text[i]==4||text[i]==5||text[i]==6||text[i]==7||text[i]==8||text[i]==9||text[i]==10){
            number += text[i];
        }
        else txt += text[i];
    }
    return number+txt
}
console.log(test("ice456su"))
console.log(test("phoom123"));
console.log(test("h1el2lo3"));
console.log(test("hello"));
console.log(test("hel56lo23"));
