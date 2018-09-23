const magazine = ['give', 'me', 'one', 'grand', 'today', 'night'];
const note = ['give', 'one', 'grand', 'today'];
//const magazine1 = ['two', 'times', 'three', 'is', 'not', 'four'];
//const note1 = ['two', 'times', 'two', 'is', 'four'];

// Complete the checkMagazine function below.
function checkMagazine(magazine, note) {
	// create map for magazine words that has value of howm many
	// times word is in array
	const MagMap = new Map();
	magazine.forEach(element => {
		//console.log(MagMap.get(element));
		let ifExist = MagMap.get(element);
		if (!ifExist) {
			MagMap.set(element, 1);
		} else {
			MagMap.set(element, ifExist + 1);
		}
	});

	// iterate through note, checking for words in MagMap.
	function makeRansomNote() {
		//let allWordsFound = true;
		for (let word of note) {		
			if (!getWordfromMagMap(word)) {
				console.log('No');
				return;
				//console.log('Yes');
			}
		}
		console.log('Yes');
		return;
	}

	// check for word in MagMap. If exists, return true, decrement count in map, else return false
	function getWordfromMagMap(word) {
		let found = MagMap.get(word);
		if (found) {
			console.log('found word ' + word, found);
			MagMap.set(word, found - 1);
			return true;
		} else {
			console.log('word not found ' + word);
			return false;
		}
	}
	//console.log(MagMap);
	makeRansomNote();
}

checkMagazine(magazine, note);

/*
Harold is a kidnapper who wrote a ransom note, but now he is worried it will be traced back to him through his handwriting. He found a magazine and wants to know if he can cut out whole words from it and use them to create an untraceable replica of his ransom note. The words in his note are case-sensitive and he must use only whole words available in the magazine. He cannot use substrings or concatenation to create the words he needs.

Given the words in the magazine and the words in the ransom note, print Yes if he can replicate his ransom note exactly using whole words from the magazine; otherwise, print No.

For example, the note is "Attack at dawn". The magazine contains only "attack at dawn". The magazine has all the right words, but there's a case mismatch. The answer is NO

Complete the checkMagazine function in the editor below. It must print YES if the note can be formed using the magazine, or NO.

checkMagazine has the following parameters:

magazine: an array of strings, each a word in the magazine
note: an array of strings, each a word in the ransom note

	- magazine: an array of strings, each a word in the magazine
	- note: an array of strings, each a word in the ransom note

	sample 1
		input
		give me one grand today night
		give one grand today
		output
		YES
	sample 2
		input
		two times three is not four
		two times two is four
		output
		NO
*/
