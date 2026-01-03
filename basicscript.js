// // // function checkevenodd(num){
// // //   if(num%2==0)
// // //     return 1;
// // //   else
// // //     return 0;
// // // }
// // // function checkage(age){
// // //   if(age<18 && age>0)
// // //     console.log("Not eligible for voting.");
// // //   else if(age>18 && age>0){
// // //     console.log("Eligible for voting.");
// // //   }
// // //   else
// // //     console.log("Wrong age entered.");
// // // }
// // // function findgreater(a,b){
// // // if (a>b){
// // //   console.log("a is greater than b.");
// // // }
// // // else if(b>a){
// // //   console.log("b is greater than a.");
// // // }
// // // else if (a==b){
// // //   console.log("a is equal to b.");
// // // }
// // // }
// // // function checkpassfail(marks){
// // //   if(marks >0 && marks>=40)
// // //     console.log(`you passed the exam.`);
// // //   else
// // //     console.log(`you failed the exam.`);
// // // }

// // const { name } = require("ejs");

// // // function checkTemprature(temp){
// // //   if(temp >30){
// // //     console.log("temperature is hot.");
// // //   }
// // //   else if(temp>20 && temp<30){
// // //     console.log("temperature is normal.");
// // //   }else
// // //     console.log("temperature is cold.");
// // // }
// // // console.log(`calling funtion 1.`);
// // // console.log(`to check even odd enter number :`);
// // // let input =prompt(`enter a number :`);
// // // let a=checkevenodd(input);
// // // if(a=1){
// // //   console.log("even.");
// // // }
// // // else
// // //   console.log("odd.");
// // // let age= prompt(`enter the age to check voting eligibility.`);
// // // checkage(age);
// // // let ax= prompt(`enter the number to find greater than.`);
// // // let bx= prompt(`enter the 2nd number to find greater than.`);
// // // findgreater(ax,bx);
// // // let ma= prompt(`enter the marks to check pass or fail.`);
// // // checkpassfail(ma);
// // // let te= prompt(`enter the temperature to find weather.`);
// // // checkTemprature(te);
// // function printnumbers(n){
// //   for(let i=1;i<=n;i++)
// //     console.log(i);
// // }
// // printnumbers(10);
// // function print_tables(){
// //   for(i=1; i<=10 ; i++){
// //     for(let j=1;j<=10; j++){
// //       console.log(i*j);
// //     }
// //   }
// // }
// // print_tables();

// // function sum(n){
// //   let sum = 0;
// //    for(i=1; i<=n ; i++){
// //     sum +=i;
// //    }
// //    console.log(sum);
// // }
// // sum (9);

// // function countdown(n){
// //   for(i=n; i>=1n ; i++)
// //   {
// //     console.log(i);
// //   }
// // }
// // countdown(5);

// const data={
//   user1: {name: 'Abc' ,age : 12, id : 1},
//   user2: {name: 'Def' ,age : 21, id : 2},
//   user3: {name: 'Ghi' ,age : 18, id : 3},
//   //user4: {}
// }
// console.log(data.user3.age);
// console.log(data["user1"].id);
// console.log(`user1 details :`,data.user1);
// console.log(Object.keys(data).length);
// console.log(Object.values(data).length);

// const array = Object.values(data).map( user =>
//   {return {name: user.name.charAt(0)+
//     user.name.slice(1).toLowerCase(),
//     age : user.age}})
// console.log(array);

// const age = Object.values(data).map(
//   user => {
//     return user.age >=18;
//   }
// )
// console.log(age);

// // const array = Object.values(data).map( user =>(user.name))
// // console.log(array);

// // const array = Object.values(data).map( user =>(user.age))
// // console.log(array);

const data={
  details : {name: 'Ayush' ,age : 21, id : 1},
  address : {city: 'Nagpur' ,state : 'maharashtra', zipcode : 440035},
  contacts : {number : '9881961369' ,email : 'jaiswalamol83@gmail.com'}
  // user4: {}
}

for (let key in data){
  console.log(key,'-->');
  for ( let subkey in data[key]){
    console.log(subkey,'-->', data[key][subkey]);
  }
}
const get_randomValue= ()=>{

}
const get_randomString= ()=>{

}
const get_randomNumber= ()=>{

}
export default get_randomValue;
export { get_randomNumber, get_randomString};

