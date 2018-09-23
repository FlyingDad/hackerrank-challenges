const s1 = 'hello';
const s2 = 'world'; // share o and l
//const s3 = 'hi';
//const s4 = 'world'; // no common substrings

function twoStrings(s1, s2) {
	// create map for magazine words that has value of howm many
	// times word is in array
	let split1 = s1.split('');
	let split2 = s2.split('');
	const S1Map = new Map();
	createMap(split1, S1Map);



	function createMap(arr, map){
		arr.forEach(element => {
			//console.log(MagMap.get(element));
			let ifExist = map.get(element);
			if (!ifExist) {
				S1Map.set(element, 1);
			} 
			//else {
			//S1Map.set(element, ifExist + 1);
			//}
		});
	}
	// check for word in MagMap. If exists, return true, decrement count in map, else return false
	function getletterfromMap(letter) {
		let found = S1Map.get(letter);
		if (found) {
			//console.log('found letter ' + letter, found);
			//MagMap.set(letter, found - 1);
			return true;
		} else {
			//console.log('letter not found ' + letter);
			return false;
		}
	}

	function checkForSub(){
		for(let letter of split2) {
			if(getletterfromMap(letter)){
				return 'Yes';
			}
		}
		return 'No';
	}

	//console.log(S1Map);
	checkForSub();
}


twoStrings(s1, s2);
/*
Given two strings, determine if they share a common substring. A substring may be as small as one character.

For example, the words "a", "and", "art" share the common substring . The words "be" and "cat" do not share a substring.

Function Description

Complete the function twoStrings in the editor below. It should return a string, either YES or NO based on whether the strings share a common substring.

twoStrings has the following parameter(s):

s1, s2: two strings to analyze .
*/