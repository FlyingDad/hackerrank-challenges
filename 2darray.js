const testnums1 = [1,2,3,4,5,6]
// const testnums2 = []

let arr = [[-9,0,-9,0,0,0],[-9,-9,-9,0,0,0],[-9,0,-9,8,0,1],[1,4,1,6,-2,2],[1,3,2,6,0,4],[1,2,3, 0,0,0]]
//arr[0] = new Array(4)
//console.log(arr[0])
// for(let i = 0; i < arr.length; i++){
// 	for(let j=0; j < testnums1.length; j++)
// 		arr[i].push(testnums1[j])
// }

console.table(arr)

let width = arr.length;
let height = arr[0].length;

console.log(width, height)
let sums = [];
for(let i = 0; i < width - 2; i++){
	for(let j=0; j < height - 2; j++){
		// console.log('j=' + j)
		let sum = 0;
		let top = arr[i][j]+arr[i+1][j] + arr[i+2][j];
		//console.log(top)
		let middle = arr[i+1][j+1]
		//console.log(middle)
		let bottom = arr[i][j+2] + arr[i+1][j+2] + arr[i+2][j+2];
		console.log(bottom)
		sum += top + middle + bottom
		sums.push(sum)
		// var t;
    // t = arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1] + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
    // if( t > sums ) {
    //   sums = t ;
		// }
	}
}

console.log(sums)
console.log(Math.max(...sums))