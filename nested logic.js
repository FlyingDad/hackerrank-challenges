function processData(input) {

	let arr = input.split('\n');
	let inputRetDate = arr[0].split(' ');
	let inputDueDate = arr[1].split(' ');

	let retDate = new Date(inputRetDate[2] + ' ' + inputRetDate[1] + ' ' + inputRetDate[0]);
	let dueDate = new Date(inputDueDate[2] + ' ' + inputDueDate[1] + ' ' + inputDueDate[0]); // Y M D


	let daysLate = (Math.floor((Date.UTC(retDate.getFullYear(), retDate.getMonth(), retDate.getDate()) - Date.UTC(dueDate.getFullYear(), dueDate.getMonth(), dueDate.getDate()) ) /(1000 * 60 * 60 * 24)));
	let fine;
	if(daysLate <= 0){
		fine = 0;
	}
	else if(dueDate.getFullYear() !== retDate.getFullYear()) {
		fine = 10000;
	} else if(dueDate.getMonth() !== retDate.getMonth()){
		fine = 500 * (retDate.getMonth() - dueDate.getMonth());
	} else {
		fine = 15 * daysLate;
	}
	console.log(fine);
}


let string = '2 6 2014\n5 7 2014';
processData(string);
