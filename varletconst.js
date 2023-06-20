// agar bina kisi var let const ke variable banaoge vo auto maticallly var wala banega

// var keyword wala variable ka scope nhi hota h
x = 90
var y = 34
function abc(){
    x = 9;
    var y = 87;
}
abc();
console.log("value of y", y);
console.log("value of x", x);

// let keyword variable scope in same block not outside of the block
let z = 86;
function abc1(){
    let z = 98;
    console.log("z in inside block", z);
}
abc1();
console.log("value of z", z);

// aap dekh sakte to var vale variale ki value block ke under redeclair hui to bahar bi redeclair value dekh rahi h but let m z ki avaue redeclair hui to vo function/block ke under to dekh rahi h but bahar aane par purani wali value hi dekh rahi h
// and var and let dono ki values reassign ho sakti h

const v = 89;

// const keyword wale variable ki value reassign nhi ho sakti iska scope bi let ki tarah hota h

// var aur let reassign ho jate h

var var1 = 78;
var1 = 56;
let var2 = 65;
var2 = 101;
console.log(`value of x is ${x} and value of y is ${y}`)

v = 90;


