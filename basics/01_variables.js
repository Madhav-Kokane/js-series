console.log("Variables")
const accountId=42;
let accountMail="madhav@google.com";
var accountPassward="1234";
let accountState;//Only Initialization can store undefined as a value in that variable

//We Can Directly reserve memory for any variable without using any Keyword in JS 
//But Not an proper Way
accountCity="Nanded";

//Const can not be updated 
// accountId=40;
console.log("Account Id = ",accountId);

//New Method to print Data in Table Format
console.table([accountId,accountMail,accountPassward,accountCity,accountState]);

/*
  Prefer Not to Use (Var)
  Because of Issue in Block Scope and Functional Scopes 
*/
