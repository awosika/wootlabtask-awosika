let myArray = [1,5,4,3,6,8,10];

function sumEvenOdd(myArray){
let sumEven = 0;
let sumOdd= 0;
let ourArray = [];
for (let i = 0; i < myArray.length; i++){
  if (myArray[i] % 2=== 0){
    sumEven += myArray[i]
    } else {
    sumOdd += myArray[i]
    }
}
return [sumEven,sumOdd];
}
console.log(sumEvenOdd(myArray))