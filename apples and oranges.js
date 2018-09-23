/*
countApplesAndOranges has the following parameter(s):

s: integer, starting point of Sam's house location.
t: integer, ending location of Sam's house location.
a: integer, location of the Apple tree.
b: integer, location of the Orange tree.
apples: integer array, distances at which each apple falls from the tree.
oranges: integer array, distances at which each orange falls from the tree.
*/



function countApplesAndOranges(s, t, a, b, apples, oranges) {
	for(let i= 0; i < apples.length; i++){
		apples[i] = a + apples[i];
	}
	//console.log(apples)
	for(let i= 0; i < oranges.length; i++){
		oranges[i] = b + oranges[i];
	}
	//console.log(oranges)
	const applesFilter = apples.filter(apple => {
		return (apple >= s && apple <= t);
	});
	console.log(applesFilter);
	const orangesFilter = oranges.filter(orange => {
		return (orange >= s && orange <= t);
	});
	console.log(orangesFilter);
}
countApplesAndOranges(2, 3, 1, 5, [2], [-2]);
//countApplesAndOranges(37455, 87275,35609, 89610, [73201], [77971]);
