const name="Kshitij"
const repoCount=50
// console.log(`Length of String Name is : ${name.length}`)

//Little Bit Old Syntax 
// console.log(name + repoCount + " Hello Guys");

//Modern Technique to Represent String
//i.e --> String InterPolation in which we use dollar sign (${variableName})

// console.log(`Hello Guys , I am ${name} and My Github Repositry 
//     is ${repoCount}`);
    //We Can Easily USe String Methods Here

//Another Method To Declare String    
const gameName = new String('Free Fire');
// console.log(gameName.length);
// console.log(gameName[0]);

//double underScore
console.log(gameName.__proto__);//output : {} i.e it is an Object

//Read all The Methods Used in Strings
console.log(gameName.toUpperCase());//Disint changes Original Value //saved in Stack

// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('e'));

const newName="Akshita-Konapure";
//Create a Substring Using an String
const newString=newName.substring(0,7);
//we can not give negative indexes in substring() function
// console.log(newString);

const anotherString=newName.slice(0,7);
const anotherString2=newName.slice(-15,12);
console.log(anotherString);
console.log(anotherString2);

const newStringOne="   Madhav   Kokane   ";
console.log(newStringOne);
//--> trim function cuts the extra space 
console.log(newStringOne.trim());

// const url="https://madhav.com/madhav kokane";
// console.log(url);
const url="https://madhav.com/madhav%20kokane";
//Browser Dosn't Understand spaces Browser automatically 
// changes space in (%20) in URLn coding
console.log(url.replace('%20','-'));

//is madhav Present
console.log(url.includes('madhav'));
console.log(url.includes('brother'));

















