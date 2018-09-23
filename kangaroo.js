




// Complete the kangaroo function below.
function kangaroo(x1, v1, x2, v2) {
	if(v2 >= v1){
		return 'NO';
	}
	for(let i = 0; i < Number.POSITIVE_INFINITY; i++){
		x1 += v1;
		x2 += v2;
		if(x1 === x2){
			return('YES');
		} else if(x1 > x2){
			return('NO');
		}
	}
}
//console.log(kangaroo(0,3,4,2));
console.log(kangaroo(0,2,5,3));