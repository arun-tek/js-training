// kisi bi cheez ko console m print karana ho to console.log ka use karte h
console.log("Jai Ganesh");
console.log("jai Shri ram", 5);
console.log("jai Shri ram" + 5);
console.log("jai Shri ram" + "5");
console.log("jai Shri ram" + " " + "5");

// console ke alag alag prakar

// console info function yeah console log ki tarah hi h but important infomation share karne ke liye use hota h zadda

console.info("This is an information");
console.info(1);

//yeah console.clear() method h isko isliye comment kiya h kyoki yeah pura console clear kar deta h
// console.clear();

// console.error() isme hum log error jo show karani hoti h vo daalte h

console.error("This is an error");

// console.warn() iska use warning show karane ke liye hota h

console.warn("This is an warning");

// jab hum kisi expersion me dobut ho to isme daal dete h agar uss expersion ka result false hoga tabi iska message print hoga

console.assert(4>5, "this is wrong");

// yeah wali line print nhi hui kyoki iska answer true h
console.assert(5>4, "this is true");

// kisi loop ka count pata lagana h ki vo kitni baar chala h uske liye count() use hota h

i = 0
while(i<4){
    console.count();
    i++;
}

// table format m output dikhana ho to iska use karte h

console.table(["one", "two", "three"]);

stu = {
    "name": "Arun",
    "age": 24
}

console.table(stu);

arr_stu = [
    {
        "name": "Arun"
    },
    {
        "name": "Anil"
    }
]

console.table(arr_stu);

// console.time() and console.timeEnd() Methods yesh inke under jo expression chala h uska time calculate karke deta h but dono ke message h vo same hone chaiye tabi kar paaega.

function timeCalculator() 
{
  i = 0;
  console.time('While loop for 10 iterations');           // time starts method
  while (i < 10) 
  {
    i++;
  }
  console.timeEnd('While loop for 10 iterations');        // time end method
}
timeCalculator();