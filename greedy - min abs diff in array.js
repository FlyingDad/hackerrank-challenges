const arr1 = [-59, -36, -13, 1, -53, -92, -2, -96, -54, 75]; //1
//const arr2 = [1, -3, 71, 68, 17];  // 3
function minimumAbsoluteDifference(arr) {
	let min = Number.POSITIVE_INFINITY;
	// sort array
	let sortedArr = arr.sort((a, b) => {return a-b;});
	for(let i = 1; i < arr.length -1; i++){
		let resultLeft = Math.abs(sortedArr[i-1] - sortedArr[i]);
		let resultRight = Math.abs(sortedArr[i+1] - sortedArr[i]);
		let smallestResult = Math.min(resultLeft, resultRight);
		if (smallestResult < min){
			min = smallestResult;
		}
	}
	return min;
}

console.log(minimumAbsoluteDifference(arr1));
