const ana1=['cde','abc'];
const ana2=['fcrxzwscanmligyxyvym','jxwtrhvujlmrpdoqbisbwhmgpmeoke'];


// get first index of a, scan b, deleting every index until indexes match
// go to next index and repeat

function makeAnagram(a, b) {
	let aArr = a.split('');
	let bArr = b.split('');
	//console.log(aArr,bArr);
	let aFilteredArr = [];
	let bFilteredArr = [];
	let removes = 0;
	// find letters in a that are in b
	for(let i = 0; i < aArr.length; i ++) {
		
		if(bArr.indexOf(aArr[i]) >= 0){
			aFilteredArr.push(aArr[i]);
			removes++;
		}
	}
	// find letters in b that are in a
	for(let i = 0; i < bArr.length; i ++) {		
		if(aArr.indexOf(bArr[i]) >= 0){
			bFilteredArr.push(bArr[i]);
			removes++;
		}
	}
	console.table(aFilteredArr);
	console.table(bFilteredArr);
	// now find the anagram
	let asearchIndex = 0;
	let bsearchIndex = 0;
	let match = false;
	while(asearchIndex <= aFilteredArr.length){
		if(aFilteredArr[asearchIndex] != bFilteredArr[0]){
			bFilteredArr.splice(0,1);
		}else match == true;

		bsearchIndex++;
	}
	console.log(aFilteredArr, bFilteredArr);
	return removes;
}

console.log(makeAnagram(ana2[0], ana2[1]));
