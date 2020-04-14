
function submit() {

	clearOutput();

	// get the HTMLElement
	var textBox = document.getElementById("numbersInput");

	// get its value
	var stringInput = textBox.value;

	if (stringInput != "") {

		// clear its value
		textBox.value = "";

		// now we need to parse the string by spaces into an integer array
		var stringArray = stringInput.split(" ");
		var integerArray = new Array(stringArray.length);
		var newSize = 0;

		for (var i = 0; i < stringArray.length; i++) {
			if (!isNaN(parseInt(stringArray[i]))) {
				integerArray[i] = parseInt(stringArray[i]);
			}
			newSize = i;
		}

		var boolean = true;

		// create another integer array with the correct values only
		var correctIntegerArray = new Array();
		for (var i = 0; i < integerArray.length; i++) {
			if (integerArray[i] != undefined) {
				correctIntegerArray.push(integerArray[i])
			}
		}

		if (boolean) {

			if (correctIntegerArray.length > 0) {
				selectionSort(correctIntegerArray);
			}
		}
	}
}

function clearOutput() {
	// needs to clear all the previous elements
	var divElement = document.getElementById("results");
	while (divElement.firstChild) {
		divElement.removeChild(divElement.lastChild);
	}
}

// the place is the step of the sorting
// the sorted string is the currently sorted, or being sorted,
// 	integer array
function outputSortedString(sortedString, place) {

	// format the string
	var formattedString = "";

	for (var i = 0; i < sortedString.length; i++) {
		if (i === place) {
			formattedString += " | ";
		}
		formattedString += sortedString[i];
		formattedString += " ";
	}

	// first get the div element we set up
	var div = document.getElementById("results");

	// then we need to add a new element
	var parElement = document.createElement("p");

	parElement.innerHTML = formattedString;

	// add the child element
	div.appendChild(parElement);
}

function selectionSort(integerArray) {

	// Selection Sort Algorithm
	var i = 0;
	var j = 0;
	var min = 0;
	var temp = 0;
	var stepnum = 0;

	// Print before any sorting, step 0.
	// Can delete if you want
	outputSortedString(integerArray, stepnum);

	for (i = 0; i < (integerArray.length - 1); i++) {
		min = i;
		for (j = i + 1; j < integerArray.length; j++) {
			if (integerArray[j] < integerArray[min]) {
				min = j;
			}
		}
		// Swap
		temp = integerArray[i];
		integerArray[i] = integerArray[min];
		integerArray[min] = temp;

		// Iterate step, then print
		stepnum++;
		outputSortedString(integerArray, stepnum);
	}
}

