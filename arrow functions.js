/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {
	let m = nums.map(n => {
		if(n % 2 === 0) {
			return n * 2;
		}
		else {
			return n * 3;
		}
	});
	return m;
}

let arr = [1, 2, 3, 4, 5];

console.log(modifyArray(arr));