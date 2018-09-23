
let arr1 = [6,4,1]
let arr2 = [1,2,3]
let arr3 = [3,2,1]
function countSwaps(a) {
	let swaps = 0;
	for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length - 1; j++) {
      if (a[j] > a[j + 1]) {
          swap(j, j + 1);
      }
    }  
	}

	function swap (index1, index2){
		let temp = a[index1];
		a[index1] = a[index2];
		a[index2] = temp;	
		swaps++;
	}

	return 'Array is sorted in ' + swaps + ' swaps.\n'  + 'First Element: ' + a[0] + '\nLast Element: ' +  a[a.length-1]
}

console.log(countSwaps(arr3))