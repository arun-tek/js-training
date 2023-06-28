let text = "John Doe";

console.log(text);
console.log(text.length);
// yeah ek limit ke characters ko nikalne ke liye use hota h but paramanent string me change nhi karta h
console.log(text.slice(2,5));
console.log(text);
// substring() and substr() is similar to slice
console.log(text.slice(3));
// first value hi daalne phir uss index se last index tak ki puri string de deta h

// string m aaye world ko ek bar replace karna h to replace method ka use karte h
let text1 = "Please visit Microsoft! Microsoft";
let newText = text1.replace("Microsoft", "W3Schools");
// yeah main variable m permanent change nhi karta dekho tabi text1 vaisa hi h
console.log(text1);
console.log(newText);

//example 2 replace case insensitive, use a regular expression with an /i flag (insensitive):

let text2 = "Please visit Microsoft!";
let newText2 = text2.replace(/MICROSOFT/i, "W3Schools");
console.log(newText2);

// pure string se word replace karna ho to replaceAll() ka use hota h
let newText3 = text1.replaceAll("Microsoft", "W3Schools");
console.log(newText3);
