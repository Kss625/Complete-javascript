// a) objects - reference Types

const person = {
    Name : "Sushant ",
    age : 20 ,
    city : "Delhi",
    Hobbies : ["reading","coding","listening music"]
}
console.log(person);
console.log(person.Name,person.age,person.city);// not so prefer
console.log(person["Name"],person["age"])//prefer

// b) Add key value pairs to object
person.gender = "male";
console.log(person);

// c) for in loop , object.keys

for(let key in person){// for in loop,gives key for objects
    console.log(`${key} : ${person[key]}`);// person.key is not used as no key is present with name of key
}

for(let key of Object.keys(person)){//gives key of objects
    console.log(key)
}

// d) computed properties

const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "myvalue1";
const value2 = "myvalue2";
const obj ={}
obj[key1] = "value1";
obj[key2] = "value2";
console.log(obj);

const obj1 = {
    key1: "value1",
    key2 : "value2"
    /*[key1] : "value45"  baad wali value pehli value ko override kar degi */
}


// e) spread operator in javascript

const obj2 = {
    // key1 : "value59", obj ke key1 ko override kar degi
    key3 : "value3",
    key4 : "value4"
}
const newobject = {...obj1, ...obj2,key7:"value7"};/* important */
console.log(newobject);


// object destructing

const band = {
    bandname : "led zepplin",
    famousSong : "stairway to highway",
    year : 1968
}

const {bandname:var1,famousSong:var2,...rest}=band;
const {famousSong:var4,bandname:var3,...rest1}=band;//destructing ke liye object ke key same hone chahiye or uska naam ham change bhi kar skte hain order does not matter
console.log(var1,var2,rest);
console.log(var3,var4,rest);

// objects inside array

const users = [
    {
        user_id : 1,
        first_name : "sushant",
        gender : "male",

    },
    {
        user_id : 2,
        first_name:"mohit",
        gender:"male"
    },
]
for(let user of users) {
    console.log(user["user_id"]);
}

const [user1,user2]=users;
console.log(user1,user2)

const [{first_name},{user_id}]=users;
const [{first_name:Name},{user_id:id}]=users;//name bhi change kar skte hain
console.log(first_name,user_id)
console.log(Name,id)






