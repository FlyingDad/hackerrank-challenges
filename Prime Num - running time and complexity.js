function processData(nums) {
	//let nums = input.split('');
	//nums.shift();
	//console.log(arguments)
	for (let i = 0; i < nums.length; i++) {
		// Corner cases
		if (nums[i] <= 1) {
			console.log('Not prime');
			continue;
		} else if (nums[i] <= 3) {
			console.log('Prime');
			continue;
		}
		else if (nums[i] <= 1) {
			console.log('Not prime');
			continue;
		} else if (nums[i] <= 3) {
			console.log('Prime');
			continue;
		} else if (nums[i] % 2 == 0 || nums[i] % 3 == 0) {
			console.log('Not prime');
			continue;
		}
		
		// all primes are of the form 6k ± 1
		else {
			let result = isPrime(nums[i]);
			console.log(result);
		}
	}

	function isPrime(num){
		for (let j = 5; j * j <= num; j = j + 6) {
			if (num % j == 0 || num % (j + 2) == 0) {
				return 'Not prime';
			}				
		}
		return 'Prime';		
	}	
}

processData([1000000007, 100000003, 1000003 ]);
processData([12, 5, 7 ]);