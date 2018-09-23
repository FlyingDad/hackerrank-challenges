let btnId = ['btn1', 'btn2', 'btn3', 'btn6', 'btn9', 'btn8', 'btn7', 'btn4'];
let btns = [];
let btnTxt = [1, 2, 3, 6, 9, 8, 7, 4];
for(let i = 0; i < btnId.length; i++){
	let nextbtn = btnId[i];
	let btn = document.getElementById(nextbtn);
	btns.push(btn); 
}
let btn5 = document.getElementById('btn5');

btn5.addEventListener('click', function(){
	rotate();
});

function rotate(){
	// were going to shift the btn txt array, then reassign innertext to each button
	// get last button text before popping and shifting it off
	let lastBtnTxt = btnTxt.pop();
	btnTxt.unshift(lastBtnTxt);
	// now we need to change innerhtnml of all btns
	for(let i = 0; i < btns.length; i++){
		btns[i].innerHTML = btnTxt[i];
	}
}

