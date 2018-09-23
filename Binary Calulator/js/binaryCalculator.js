// listen for button clicks
document.addEventListener('click', function (event) {
	let src = event.path[0].id;
	// respond to button events
	let re = /^btn/;
	if (src.match(re)) {
		//console.log(src, 'match');
		switch(src) {
		case 'btn0':
		case 'btn1': 
			// pass the inner test of the button so we can determine which number was pressed
			numberPressed(event.srcElement.innerText);
			break;
		case 'btnClr':
			clearPressed();
			break;
		case 'btnMul':
		case 'btnSub':
		case 'btnDiv':
		case 'btnSum':
			// pass the inner test of the button so we can determine which operation to do
			operationPressed(event.srcElement.innerText);
			break;
		case 'btnEql': 
			equalPressed();
			break;
		default: break;
		}
	}
});
// displayClear will be true after clear is pressed
// used to control valid button presses
let displayClear = true;
// opPressed true whan an operation is presses
// used to control valid button presses
let opPressed = false;
let operand1 = '', operand2 = '', opType = '', answer = '';
let displayText='';
let displayEl = document.getElementById('res');
displayEl.innerHTML = displayText;

function numberPressed(number) {
	const num = number === '0' ? '0': '1';
	if(displayClear) {
		displayClear = false;
		displayText = num;
		displayEl.innerHTML = displayText;
	} else {
		displayText += num;
		displayEl.innerHTML = displayText;
		// build second operand as numbers are pressed and op has been selected
		if(opPressed){
			operand2 += num;
		}
	}
	console.log(operand1, opType, operand2);
}

function clearPressed() {
	opPressed = false;
	displayClear = true;
	operand1 = operand2 = '';
	displayText = '0';
	displayEl.innerHTML = displayText;
}

function operationPressed(operator) {
	operand1 = displayText;
	let op = getOperator(operator);
	opType = op;
	if(!displayClear && !opPressed) {
		displayClear = false;
		opPressed = true;
		displayText += op;
		displayEl.innerHTML = displayText;
	}
}

function equalPressed() {
	let bin;
	switch(opType){		
	case '+':
		answer = parseInt(Number(operand1), 2) + parseInt(Number(operand2), 2);
		console.log(answer);
		bin = answer.toString(2);
		//displayEl.innerHTML = bin;
		equalReset(bin);
		break;
	case '-':
		answer = parseInt(Number(operand1), 2) - parseInt(Number(operand2), 2);
		console.log(answer);
		bin = answer.toString(2);
		displayEl.innerHTML = bin;
		break;
	case '/':
		answer = parseInt(Number(operand1), 2) / parseInt(Number(operand2), 2);
		console.log(answer);
		bin = answer.toString(2);
		displayEl.innerHTML = bin;
		break;
	case '*':
		answer = parseInt(Number(operand1), 2) * parseInt(Number(operand2), 2);
		console.log(answer);
		bin = answer.toString(2);
		displayEl.innerHTML = bin;
		break;
	default:
		return;
	}
}

function equalReset(bin){
	operand1 = bin;
	displayText = operand1;
	displayEl.innerHTML = displayText;
	opPressed = false;
	displayClear = false;
}

function getOperator(operator) {
	switch(operator){
	case '+':
		return '+';
	case '-':
		return '-';
	case '/':
		return '/';
	case '*':
		return '*';
	default:
		return;
	}
}