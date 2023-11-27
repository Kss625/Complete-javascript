// 1.Arithmetic operators-need two operands

let a = 5;
let b = 6;
console.log("a=",a, "b=",b);


console.log("a+b=", a+b);//11
console.log("a-b=", a-b);//-1
console.log("a*b=", a*b);//30
console.log("a/b=", a/b);//0.83333333333333334
console.log("b%a=", b%a);//1, % gives remainder
console.log("a**b=", a**b);//5 ki power 6

//need one operand-unary operator

console.log(a++);//a=a+1,(post increment)first print the value of a then increment by +1
console.log(++a);//a=a+1,(pre increment)first increment by +1 then print the value of a

console.log(b--);
console.log(--b);

// 2. Assignment operator
let c= 7;
c+=4//c=c+4
console.log(c);
c-=2//c=c-4
console.log(c);
c*=4//c=c*4
console.log(c);
c/=3//c=c/4
console.log(c);
c%=3//c=c%4
console.log(c);
c**=4//c=c**4
console.log(c);

// 3. Comparison operators

let num = 5;
let num1 = "5";
console.log('5=="5"', num==num1);// it checks only value not their data types
console.log('5==="5"',num===num1);// it checks data-type also
console.log('5!="5"',num!=num1);
console.log('5!=="5"',num!==num1);

// 4. Logical operators
let d = 6;
let e =7;
let f = 10;
console.log("f>=e && f>=d)",(f>=e && f>=d))
console.log("(f>=e || f>=12)",(f>=e || f>=12))
console.log("!(f>=e )",!(f>=e ))
console.log((5==5)?"true1":"false1")

// 5. Bitwise operators
let g = 10;
let h = 11;
console.log(g&h);
console.log(g|h);







