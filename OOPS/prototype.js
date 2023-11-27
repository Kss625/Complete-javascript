function hello(){
    console.log("Hello world");
}
// JS function===function + object

// console.log(hello.name);

// hello.ownproperty = "vary unique  value";
// console.log(hello.ownproperty);

// console.log(hello.prototype); // free ki jagah,only function provides prototype property


// const usermethod ={
//     about : function(){
//        return `person name is ${this.firstName} and age is ${this.age}`
//     },
//     is18: function(){
//         return this.age>=18;
//     }
// }


// function createUser2(firstName,lastName,email,age,address){
//     const user = Object.create(createUser2.prototype);//{}
//     user.firstName= firstName;
//     user.lastName= lastName;
//     user.email= email;
//     user.age= age;
//     user.address= address;
//     return user;
// }
// console.log(createUser2.prototype)


// createUser2.prototype.about=function(){
//     return `person name is ${this.firstName} and age is ${this.age}`

// };
// createUser2.prototype.is18 = function(){
//     return this.age>=18;
// }

// const User6=createUser2("Karshita","kumar","h2k@gmail.com",19,"delhi")
// const User7=createUser2("arjat","kumar","ak@gmail.com",19,"delhi")
// console.log(User6,User6.about())


// new keyword

// function createuser(NAME,AGE){
//     this.NAME = NAME;
//     this.AGE =AGE;

// }
// createuser.prototype.about=function(){
//     console.log(this.NAME,this.AGE);
// }
// const user1 = new createuser("SKARN",7);
// user1.about();


// constructor function
function CreateUser2(firstName,lastName,email,age,address){
    // const user = Object.create(createUser2.prototype);//{}
    this.firstName= firstName;
    this.lastName= lastName;
    this.email= email;
    this.age= age;
    this.address= address;
    // return user;
}
console.log(CreateUser2.prototype)


CreateUser2.prototype.about=function(){
    return `person name is ${this.firstName} and age is ${this.age}`

};
CreateUser2.prototype.is18 = function(){
    return this.age>=18;
}

const User6=new CreateUser2("Karshita","kumar","h2k@gmail.com",19,"delhi")
const User7=new CreateUser2("arjat","kumar","ak@gmail.com",19,"delhi")
console.log(User6,User6.about())

for(let key in User6){
    console.log(key)
}

for(let key in User6){
    if(User6.hasOwnProperty(key)){
        console.log(key)
    }
}

// prototype

let numbers = [1,2,3]
// console.log(Array.prototype)
// prototype-->function
// let numbers = new Array(1,2,4);
// console.log(numbers)
// console.log(Object.getPrototypeOf(numbers))





















