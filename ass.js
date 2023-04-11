/*Write a function that takes in a string and returns it when reversed
 let food = “eating”*/
 function reverseString(str) {
  return str.split('').reverse().join('');
}
let food = 'eating';
let reversedFood = reverseString(food);
console.log(reversedFood); 

/*Write a function that takes in the following array and consoles the target if it is found else
null
let num = [2,8,0,23,5,45,76]
Target = 23
*/
function binarySearch(arr,target){
  let leftIndex=0
  let rightIndex= arr.length-1
  while(leftIndex<=rightIndex){
    let middleIndex=Math.floor ((leftIndex + rightIndex)/2)
    if(target=== arr[middleIndex]){
      return middleIndex
    }
    if(target< arr[middleIndex]){
      rightIndex = middleIndex-1
  }else{
    leftIndex = middleIndex + 1
  }
  }
  return null
  }
  console.log(binarySearch([2,8,0,23,5,45,76],23))
  /*Given years between 2000 and 2023, console all the leap years in the following
sentence, i.e “2020 is a leap year” if not console log i.e “2001 is not a leap year”*/
let i = 2000;
  for(let i=2000; i<=2023; i++){
    if(i%4===0){
    console.log(i + " is not a leap year");
    } else {
    console.log(i + " is a leap year");
    }
    }
  
  
    /*Given a range of numbers from 0 to 100, console”Fizz” if the numbers are divisible by 3,
“Buzz” if the numbers are divisible by 5, and “FizzBuzz” if divisible by both 3 and 5.*/

    for(let i=0; i<=100; i++){
    if(i%3===0 && i%5===0){
    console.log("FizzBuzz");
    }
    else if(i%3===0){
    console.log("Fizz");
    }
    else if(i%5===0){
    console.log("Buzz");
    }
    else {
    console.log(i);
    }
    }
    

    /*Write a function that takes in an array of numbers and returns an array that has all
elements multiplied by 4. 
let numArray = [12,87,45,75,23,64,73]*/
    function multiplyArray(arr) {
    let newArray = [];
    for (let i=0; i<arr.length; i++) {
    newArray.push(arr[i]*4);
    }
    return newArray;
    }
    let newArray = [12,87,45,75,23,64,73]
    console.log(multiplyArray(newArray))
    
    /*Write a function that takes in an array of strings and returns an array with every element
turned into a number
let nums = [“10”,”24”,”45”,”56”,”67”] */

    
    function convertArray(arr) {
    let newArray = [];
    for (let i=0; i<arr.length; i++) {
    newArray.push(parseInt(arr[i]));
    }
    return newArray;
    }
    let nums = ["10","24","45","56","67"];
    console.log(convertArray(nums));
  
  