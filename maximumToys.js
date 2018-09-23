'use strict'

let prices1 = [50, [1,12,5,111,200,1000,10]]


function maximumToys(prices, k) {
	let maximumPossible = 0;
	let kfiltered = prices.filter(price => price <= k).sort((a,b) => a-b)
	let spent = 0
	let index = 0

	while(spent < k) {
		spent += kfiltered[index]
		if(spent < k) maximumPossible++
		index++
	}
	console.log(maximumPossible)
}

maximumToys(prices1[1], prices1[0])