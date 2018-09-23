const n = 2, k = 2;

function getMaxLessThanK(n, k){

	let max = 0;
	for(let i = n; i > 0; i--){
		for(let j = n; j > 0; j-- ){
			console.log(i, j, i & j);
			let anded = i & j;
			if(anded <= k) max = (anded);
		}
	}

	return max;
}

console.log(getMaxLessThanK(n, k));