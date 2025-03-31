let equal_pressed = 0;

// refer  all buttons excluding AC and DEL
const button_input = document.querySelectorAll('.numbers');

// refer input , equal, clearAll, eraseSingle
const input = document.querySelector('.input');
const clearAll = document.querySelector('.clearAll');
const eraseSingle = document.querySelector('.eraseSingle');
const equal = document.querySelector('.equal');

window.onload = () => {
	input.value = '';
};

// access each class using forEach
button_input.forEach((button_class) => {
	button_class.addEventListener('click', (e) => {
		if (equal_pressed == 1) {
			input.value = "";
			equal_pressed = 0;
		}
		// display value for each button
		input.value += button_class.value;
	});
});

equal.addEventListener('click', () => {
	equal_pressed = 1;
	let inp_val = input.value;

	try {
		//evaluate user's input
		let solution = eval(inp_val);
		// true for natural numbers
		// false for decimal
		if (Number.isInteger(solution)) {
			input.value = solution;
		} else {
			input.value = solution.toFixed(2);
		}
	} catch (err) {
		alert("Invalid input");
	}
});

// clear whole input
clearAll.addEventListener('click', () => {
	input.value = "";
});

// erase single digit
eraseSingle.addEventListener("click", () => {
	input.value = input.value.substr(0, input.value.length - 1);
});