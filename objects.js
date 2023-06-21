const person = {name: "Arun", age: 23}
//object is collection of key and values in js
console.log(person);

//object m value get karne ke do tareke h ek [] dusara . notation se
console.log(person["name"]);
console.log(person.name);

// get all keys of an object
console.log(Object.keys(person));

// get all values of an object
console.log(Object.values(person));

// Add a new key value pair in an object permanently

person["religion"] = "hindu";

console.log(person);

// temperaly add
console.log({...person, height: 6})

console.log(person);

// function inside object key
const employee = {
    first_name: "Arun",
    last_name: "Tekwani",
    full_name: function(){
        return this.first_name + " " + this.last_name;
    }
}

console.log(employee.full_name());