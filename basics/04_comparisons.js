// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);

console.log("2" > 1);
//JS Converts This String in Number 
//But it is not a good practice to compare one data type with another 
//Always Compare Same Data types 
console.log("02" > 1);

//Check with NUll
console.log(null > 0);
console.log(null==0);
console.log(null>=0);  //TRUE
/* 
   The Reason is That an Equality checks (==) and 
   Comparisons (>, < , >= , <= ) Works Differently
   COMPARISONS Convert NULL to a Number,TREATING it as 0
   Thats why (3) null>=0 is true and (1) null>0 is False 

   Even though null <= 0 and null >= 0 are both true, 
   null == 0 is still false.
*/ 


console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// ===
//Strict Checks Aslso Checks Data Types 
console.log("2" === 2);











