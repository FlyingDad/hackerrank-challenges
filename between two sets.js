/*
 * Complete the getTotalX function below.
 */
function getTotalX(a, b) {
	a.sort(function(a, b) {
		return a - b;
	});
	b.sort(function(a, b) {
		return a - b;
	});
	let smallestFactor = b[0];
	

	console.log(a, b, smallestFactor);

}

console.log(getTotalX([2, 4], [116, 32, 96]));