//iterables-string,array Jinpe hum for of loop Laga sake


// array like objects-(jinke pass length property hain,index se use kar skte hain)

const firstName = "Sushant";
console.log(firstName.length);
console.log(firstName[5]);

// 1. sets

const numbers = new Set("riya");//iterable,no index based access,no duplicates allowed,order is not guaranteed
// const numbers = new Set([1,2,3,4,5]);
console.log(numbers);

numbers.add("priya")
// numbers.add("priya") not allowed for same string
numbers.add([1,2,3])
numbers.add([1,2,3])
//allowed for same array
console.log(numbers);

// if(numbers.has("r")){
//     console.log("r is present");
// }

// for(let char of numbers){
//     console.log(char);
// }


const myArray = [1,2,3,4,4,5,6,6,7,8]
//finding unique elements
const uniqueElements = new Set(myArray);
console.log(myArray,uniqueElements);

/*
 2. map objects

 object literal 
 key--> symbol,string
 map  object
 key--> array,string,number

 */

const person = new Map();
person.set("firstName","Harshit");// key , value
person.set("age",22);
person.set(1,"one");

console.log(person,person.get("age"),person.keys());

for(let [key,value] of person){
    console.log(key,typeof key);
}

for(let key of person.keys()){
    console.log(key,typeof key);
}

// 3.) clone using object.assign

const obj={
    key1:"value1",
    key2:"value2"
}

const obj2=Object.assign({},obj);
obj.key3 = "value3";
console.log(obj);
console.log(obj2);

// 4.) object chaining
const user ={
    firstName:"John",
    // address:{houseNumber:"12345"}
}
console.log(user?.firstName);
console.log(user?.address?.houseNumber);//helps to prevent from error












