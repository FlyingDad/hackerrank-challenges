// from https://medium.freecodecamp.org/how-to-implement-a-simple-hash-table-in-javascript-cb3b9c1f2997

class DumbMap {
	constructor() {
		this.list = [];
	}

	get(x) {
		let result;

		this.list.forEach(pairs => {
			if (pairs[0] === x) {
				result = pairs[1];
			}
		});

		return result;
	}

	set(x, y) {
		this.list.push([x, y]);
	}
}

let m = new DumbMap();
m.set('x', 1);
m.set('y', 2);

console.time('with very few records in the map');
m.get('I_DONT_EXIST');
console.timeEnd('with very few records in the map');

m = new DumbMap();

for (let x = 0; x < 1000000; x++) {
	m.set(`element${x}`, x);
}

console.time('with lots of records in the map');
m.get('I_DONT_EXIST');
console.timeEnd('with lots of records in the map');
