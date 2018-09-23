let s1 = 10, s2 = 14;

const [x, y] = sides`The area is: ${s1 * s2}.\nThe perimeter is: ${2 * (s1 + s2)}.`;

function sides(literals, ...expressions) {
	const [A, P] = expressions;
	const root = Math.sqrt((P*P) - (16 * A));
	let s = [];
	s.push((P + root)/4);
	s.push((P - root)/4);
	return s.sort((a,b) => {
		return a - b;
	});
}

console.log(x, y);