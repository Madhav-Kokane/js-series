//Js is a Dynamically typed Language : 
/* Type checking occurs at runtime: The data type of a variable is determined by the value
it holds during program execution, not during a separate compilation step.*/

//Primitive DataTypes

// 7 Types 
//--> String,Number,Boolean,null,undefined,Symbol
//for Big Values : BigInt

//No different types like int,float etc Only(Number)
const score = 100;
const scoreValue=100.3;
const isLoggedIn=false;
const outsideTemp=null;

let userEmail; //UndeFined or
let userEMail=undefined;


//Symbol DataType
const id = Symbol('123');
const anotherId=Symbol('123');
//Both Id != anotherId , Bcz it converts string into different symbol(datatype)

console.log(id===anotherId);

//To Convert Number into BigInt 
//Always (n) After the number 
const bigNumber=54745474541857n
console.log(typeof bigNumber);

//Non-Premitive (Reference) DataType  : Array,Objects,Functions

const heros=["shaktiman","naagraj","doga"];

//Objects 
let myObj = {
    name: "Madhav",
    age: 21
}

//Function
const myFunction=function(){
    console.log("Hello World !!!");
    
}

console.log(typeof heros);
//Typeof() ann typeof non-premitive 
// dataType is always given (Object)

// https://262.ecma-international.org/5.1/#sec-11.4.3




