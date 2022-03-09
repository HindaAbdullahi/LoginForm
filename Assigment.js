// // Assigment1 
 
// let num=prompt("Enter two digit ")
// function Digits(...n1){
   
//     let firstDigit= (num)[0];
//     let SecondDigit= (num)[1];
//     let Sum=Number (firstDigit)+Number (SecondDigit);
   
//     return Sum;

// }
// console.log("sum is "+ Digits(num))

// 
let sum=(num)=>{
     let fnum=parseInt(num/10);
     let snum=parseInt(num%10);
     return fnum+snum;
}
 let input=parseInt(prompt("enter two digits"));
 console.log("sum is "+sum(input))



// Rest
function multiply(...m){
    let mult=1;
    for(var value of m){
        mult*=value;
    }
    return mult;
}
console.log("multiplication is "+multiply(2,3))