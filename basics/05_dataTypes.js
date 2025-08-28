//Primitive DataTypes

// 7 Types 
//--> String,Number,Boolean,null,undefined,Symbol,BigInt

const score = 100;
const scoreValue=100.3;
const isLoggedIn=false;
const outsideTemp=null;

let userEmail; //UndeFined or
let userEMail=undefined;


//Symbol DataType
const id = Symbol('123');
const anotherId=Symbol('123');

console.log(id===anotherId);

//To Convert Number into BigInt 
//Always (n) After the number 
const bigNumber=54745474541857n
console.log(typeof bigNumber);

//Non-Premitive (Reference) DataType

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




