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
		integerArray[i] = parseInt(stringArray[i]);
	}

	// TODO: plug in selection sort with input as the integerArray here

}

// the place is the step of the sorting
// the sorted string is the currently sorted, or being sorted,
// 	integer array
function outputSortedString(sortedString, place) {


	// format this into an html element

}