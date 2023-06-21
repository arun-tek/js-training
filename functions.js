function abc(){
    console.log("Hi I am a function");
}

abc();

// do same naam ke funtion hone par call last wala hoga
function abc1(){
    console.log("Hi I am a function");
} 

function abc1(){
    console.log("Hi I am rewrite function");
}

abc1();

// js me bina  return statement ke kuch return nhi hota h
function fun(){
    5
}

console.log("return of fun function",fun());

function fun1(){
   return 5;
}

console.log("return of fun1 function",fun1());

// return execute hone ke baad ki lines execute nhi hoti h
function fun2(){
    return 6;
    console.log("Hi");
}

console.log("return of fun2 function", fun2());
