// console.log("data");
// console.log(x);
// var x=50;
// function sum(x=2,y=7){
//   return x+y;
// }
// console.log(sum("add" ));
// var x = 'act, run';
// console.log(x);
let arr = [1,2,3,4,5,6,7,8,9];
let sum=0;
function find_sum (){
  for(let i=0;i<arr.length;i++)
    sum+=arr[i];  
console.log(sum);
}
find_sum();
// console.log(arr.sum());