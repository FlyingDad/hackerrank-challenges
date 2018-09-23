'use strict';

let arr1 = [4,3,1,2]  // 3 swaps
let arr2 = [2,3,4,1,5] //3 swaps
let arr3 = [1,3,5,2,4,6,8] //3 swaps

/*
steps

swaps = 0
let base = start with index 0

-- loop1
find the lowest number from base upwards
swap with the indexed value
then

base = next num in array

repeat loop 1

function swap(){
	var b = list[y];
	list[y] = list[x];
	list[x] = b;
}
*/
function minSwaps(arr){
	//let arr = arr2.slice()

	let swaps = 0;
	let index = 0

	while(index < arr.length - 1) {
		let smallestIndex = null
		for(let i = index + 1; i < arr.length; i++) {
			let slice = arr.slice(index)
			let min = Math.min(...slice)
			smallestIndex = arr.indexOf(min)
		}
		//console.log(index, smallestIndex)
		if(smallestIndex != index){
			console.log(arr[index], arr[smallestIndex])
			console.log('swapping ' + index + ' and ' + smallestIndex + '  ' + arr)
			//console.log(index, smallestIndex, arr[index],arr[smallestIndex])
			let temp = arr[index];
			arr[index] = arr[smallestIndex];
			arr[smallestIndex] = temp;
			swaps++;
			//console.log(arr[index],arr[smallestIndex])
		}
		console.log(arr2)
		index++;
	}
	return [arr, swaps];
}

console.log('result: ' + minSwaps(arr3))