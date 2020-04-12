
function submit() {
	// begins the process

	// get the HTMLElement
	var textBox = document.getElementById("numbersInput");

	// get its value
	var stringInput = textBox.value;

	// clear its value
	textBox.value = "";

	// now we need to parse the string by spaces into an integer array
	var stringArray = stringInput.split(" ");
	var integerArray = new Array(stringArray.length);

	for (var i = 0; i < stringArray.length; i++) {
		if (!isNaN(stringArray[i])) {
			integerArray[i] = parseInt(stringArray[i]);
		}
	}

	alert(integerArray.toString());

	selectionSort(integerArray);
}

// the place is the step of the sorting
// the sorted string is the currently sorted, or being sorted,
// 	integer array
function outputSortedString(sortedString, place) {

	// format the string
	var formattedString = "";

	alert(sortedString.length);

	for (var i = 0; i < sortedString.length; i++) {
		if (i === place) {
			formattedString += " |";
		}
		formattedString += sortedString[i];
		formattedString += " ";
	}

	alert(formattedString);

	// first get the div element we set up
	var div = document.getElementById("results");

	// then we need to add a new element
	var parElement = document.createElement("p");

	parElement.innerHTML = formattedString;

	// add the child element
	document.body.appendChild(parElement);

	alert("Bottom");
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