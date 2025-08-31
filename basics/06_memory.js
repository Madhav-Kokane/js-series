//Statck Memory For (Primitive Data Types)
//Heap Memory For (Non-Premitive Data Types)

//JAb Bhi Stack Memory Use Hoti Hain Tab Declared 
// Variable Ka Copy Milta hain 


//JAb Bhi Heap Memory Use Hoti Hain Tab Hume Variable  
//KA Reference Milta hain Matlab Changes Directly Hoge 

//Example
let myYoutubeName = "Akshitakonapure.com";
let anotherYtName = myYoutubeName;

anotherYtName="kshitijkonapure.com";
console.log(myYoutubeName); //AkshitaKonapure.com 
console.log(anotherYtName);//Kshitijkonapure.com
//In this Case copy of Variable is Created Hence Changes is not done in main Variable

let userOne={
    email:"madhav@gmail.com",
    upi:"madhav@ybl"
};

let userTwo=userOne;
userTwo.email="madhavKokane@gmail.com";

console.log(userOne.email);//madhavKokane@gmail.com
console.log(userTwo.email);//madhavKokane@gmail.com
//Since it is in Heap Memory 
//Here Copy of Variable is not created.
//Reference is Provded Hence it changes directly in main memory 
// Hence Output of old variable is also changed  


