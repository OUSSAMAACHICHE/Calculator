// dom elements
const screen = document.querySelector('.display');
const btns = document.querySelectorAll('.buttons button');

// empty array to store buttons text
let calculator = []
// To convert array into string
let calculation

// calculate function
function calc(btn) {
	// get text button
	const value = btn.textContent
	// check the buttons value
	if (value === 'c') {
		calculator = []
		screen.textContent = '0'
	} else if (value === '=') {
		screen.textContent = eval(calculation)
	} else {
		// Append the button value to the calulator array
		calculator.push(value)

		calculation = calculator.join('')
		// display the current calculation
		screen.textContent = calculation
	}
}

// loop through the buttons when click
btns.forEach(button => button.addEventListener('click', () => calc(button)));



