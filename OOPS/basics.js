// 1.) methods-function inside objects
/*
const person = {
    Name : "Sushant Karn",
    Age : 20,
    about : function(){
        console.log(`person name is ${this.Name} and age is ${this.Age}`);
        // this is person object
        console.log(this)
    }
}
console.log(person.about())

function personInfo(){
    console.log(`person name is ${this.Name} and age is ${this.Age}`);
}
const person1= {
    Name : "Harshit",
    Age : 27,
    about : personInfo
}
const person2= {
    Name : "Harshita",
    Age : 28,
    about : personInfo
}

person1.about();
person2.about();
*/

// 2.)
/*
console.log(this)//this can replace  by window object
console.log(this===window)

function myfunc(){
    console.log(this)
}
window.myfunc();
myfunc.call();
*/

const user1 = {
    firstName: 'John',
    age: 34,
    about : function(hobby,favMusician){
        console.log(this.firstName,this.age,hobby,favMusician);
    }
}
const user2 = {
    firstName: 'Johnson',
    age: 39,
}

user1.about();
user1.about.call(user2,"guitar","arjit singh");//here user2 is this value no input then undefined

function about2(hobby,favMusician){
    console.log(this.firstName,this.age,hobby,favMusician);
}

about2.call(user2,"guitar","arjit")//call
about2.apply(user2,["guitar","arjit"]);//apply
const func=about2.bind(user2,"guitar","arjit");//bind
func();

// arrow function ka this nhi hota
/*
const user4 = {
    firstName: 'John',
    age: 34,
    about :()=>{
        console.log(this.firstName,this.age);
    }
}
//user4.about(); undefined, undefined
user4.about(user4);//here this = window
*/
/*
const user5 = {
    firstName: 'Johnal',
    age: 34,
    about(){
        console.log(this.firstName,this.age);
    }
}
user5.about.call(user5);
*/

// function-we can create so many user with this function

function createUser(firstName,lastName,email,age,address){
    const user = {};
    user.firstName= firstName;
    user.lastName= lastName;
    user.email= email;
    user.age= age;
    user.address= address;
    user.about=function(){
        return `person name is ${this.firstName} and age is ${this.age}`
    };
    user.is18 = function(){
        return this.age>=18;
    }
    return user;
}
const User1=createUser("harshit","kumar","hk@gmail.com",19,"delhi")
console.log(User1)
const about = User1.about()
console.log(about)
const is18=User1.is18()
console.log(is18)
const User2=createUser("harshita","kumar","h2k@gmail.com",19,"delhi")
const User3=createUser("arjit","kumar","ak@gmail.com",19,"delhi")
//above method is very time consuming and fill so much memory
// some solution

const usermethod ={
    about : function(){
       return `person name is ${this.firstName} and age is ${this.age}`
    },
    is18: function(){
        return this.age>=18;
    }
}


function createUser2(firstName,lastName,email,age,address){
    const user = Object.create(usermethod);//{}
    user.firstName= firstName;
    user.lastName= lastName;
    user.email= email;
    user.age= age;
    user.address= address;
    user.about=usermethod.about;
    user.is18 = usermethod.is18;
    return user;
}
const User6=createUser("Karshita","kumar","h2k@gmail.com",19,"delhi")
const User7=createUser("arjat","kumar","ak@gmail.com",19,"delhi")
console.log(User6.about());
console.log(User7.is18());




const obj1 ={
    key1:"value1",
    key2:"value2",
}
const obj2={
    key3:"value3",
}

// target=>console.log(obj2.key1);
const obj3 = Object.create(obj1);// {}
obj3.key4 = "value4";
obj3.key2 = "unique2";
console.log(obj1,obj3,obj3.key4,obj3.key1,obj3.key2);//target completed-pehle aone me dekhega,then dusre me dekhegi
// __proto__= [[prototype]]!=prototype
console.log(obj3.__proto__)



