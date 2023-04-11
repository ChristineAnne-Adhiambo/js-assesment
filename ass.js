/*Write a function that takes in a string and returns it when reversed
let food = “eating”*/
// let food = "eating";
// console.log(food.reverse())
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
  