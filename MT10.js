function isValidIP(IPV4) {

    IPV4 = IPV4.split('.')
    let check = false
    let overnum = false
    if (IPV4.length == 4) {
        check = true
    } else return (false)
    if (check) {
        let numlast = IPV4[IPV4.length - 1]
        let pos = numlast[0]
        for (let i = 0; i < IPV4.length; i++) {    
            if (IPV4[i] == 0 && i != IPV4.length - 1) {    //เช็คค่า IPV4 มีค่าเท่ากับ 0 และ i ต้องไม่เท่ากับค่า index สุดท้าย
                continue;
            }
            if (numlast.length >= 3) {                    //เช็คค่าสุดท้ายว่ามีความยาว 3 ตัว
                if (pos == 0) {                           //เช็คว่าตำแหน่งแรกมีค่าเป็น 0 ไหม
                    return (false)
                }
            }
            if (IPV4[i] >= 1 && IPV4[i] <= 255) {        //เช็ค IPV4 ต้องมีเลขระหว่าง 1 - 255
                overnum = true
            } else {
                overnum = false
                break
            }
        }
        if (overnum) {
            return (true)
        } else return (false)
    }
}

console.log(isValidIP("1.2.3.4"))
console.log(isValidIP("1.2.3"))
console.log(isValidIP("1.2.3.4.5"))
console.log(isValidIP("123.45.0.89"))
console.log(isValidIP("123.456.78.90"))
console.log(isValidIP("123.045.067.089"))