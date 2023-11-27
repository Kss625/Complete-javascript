class CreateUser{
    constructor(firstName,lastName,email,age,address){

        this.firstName= firstName;
        this.lastName= lastName;
        this.email= email;
        this.age= age;
        this.address= address;
    }
    about(){
        return `person name is ${this.firstName} and age is ${this.age}`
    }
    is18(){
        return this.age>=18;
    }
}

const user6=new CreateUser("Karshita","kumar","h2k@gmail.com",19,"delhi")
const user7=new CreateUser("arjat","kumar","ak@gmail.com",19,"delhi")
console.log(user6.firstName,user7.firstName,user7.lastName);
// console.log(Object.getPrototypeOf(user6));
console.log(user6.about());

class CreateUser2 extends CreateUser{//saari createuser ki property createuser2 me hogi
    constructor(name,age,graduation){
        super(name,age);
        this.graduation = graduation;
    }
    scholarship(){
        return "Get Full Scholarship";
    }

}
const ram = new CreateUser2("Ram","kumar",12);

const Ram = new CreateUser2("Ram",19,12)
console.log(Ram.scholarship());
console


class person{
    constructor(f_name,l_name,age){
        this.f_name=f_name;
        this.l_name=l_name;
        this.age=age;
    }
    setName(f_name,l_name){
        this.f_name=f_name;
        this.l_name=l_name;
        return `${this.f_name} ${this.l_name}`
        
    }
    get fullName(){
        return `${this.f_name} ${this.l_name}`
    }
}
const person1 = new person("sk","karn",18);
console.log(person1.f_name);//properties
console.log(person1.fullName)//now it's become property
console.log(person1.setName("sushant","karn"));//method

