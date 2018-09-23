/*
Given set S= {1,2,3,...,N}. Find two integers, A and B (where A < B), from set S such that the value of A&B is the maximum possible and also less than a given integer, K. In this case, &  represents the bitwise AND operator.

5 2
8 5
2 2

outputL
1
4
0
*/
const testData = [ [ 5, 2 ], [ 8, 5 ], [ 2, 2 ] ];

function maxAnd(data) {
	data.forEach(set => {
		const N = set[0];
		const K = set[1];
		let maxAnd = 0;
		for(let a = 1; a <= N; a ++){
			for(let b = 2; b <= N; b++){
				if(a !== b && b > a){
					let and = a&b;
					if(and < K && and > maxAnd){
						maxAnd = and;
					}
				}
			}			
		}
		console.log(maxAnd);
	});
}

maxAnd(testData);