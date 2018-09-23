function duplicateCount(text) {
	let split1 = text.toLowerCase().split('');
	const textMap = new Map();
	createMap(split1, textMap);

	function createMap(arr, map) {
		split1.forEach(element => {
			let ifExist = map.get(element);
			if (!ifExist) {
				textMap.set(element, 1);
			} else {
				textMap.set(element, ifExist + 1);
			}
		});
	}

	function getValues(){
		let iterator = textMap.values();
		let count = 0;
		let value = 0;
		while(value != undefined){
			value = iterator.next().value;
			console.log(value);
			if(value > 1) {
				count++;
			}
		}
		return count;
	}
	return getValues();
	
}
const t1 = 'Indivisibilities';
console.log(duplicateCount(t1));
