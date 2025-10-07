
console.log("Dates");
let myDate=new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());

/*let myCreatedDate=new Date(2023,0,23)
console.log(myCreatedDate.toDateString());

let myCreatedDate2=new Date(2015,11,25,5,13)
console.log(myCreatedDate2.toLocaleDateString());
*/

//DD-MM-YYYY
let myCreatedDate3=new Date("01-14-2023")
// console.log(myCreatedDate3.toDateString());

let myTimeStamp=Date.now()
console.log(myTimeStamp);
//Time Stamp is Used TO compare Dates in Big Projects 
console.log(myCreatedDate3.getTime());

//Always Compare dates with MiliSecond
//Current Date in milisecond
console.log(`Current Date in milisecond : ${Date.now()}`);

//to convert miliSecond in Second Divide it by 1000
//But it will print in decimal form hence use math to convert decimal value

console.log(`Current Date in Second :  ${Math.floor(Date.now()/1000)}`);

//

// let newDate1.toLocaleDateString('default',{
//     weekday:"long",

// })




