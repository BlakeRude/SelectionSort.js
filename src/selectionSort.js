
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
// element swapped is a string value
// 	integer array
function outputSortedString(sortedString, place, minElement, elementSwapped) {

	// format the string
	var formattedString = "";
	var otherString = "";
	var placeReached = false;

	for (var i = 0; i < sortedString.length; i++) {
		if (i === place) {
			formattedString += " | ";
			placeReached = true;
		}
		if (!placeReached) {
			formattedString += sortedString[i];
			formattedString += " ";
		}
		else {
			otherString += sortedString[i];
			otherString += " ";
		}
	}

	var div = document.getElementById("results");
	var parElement;
	var newDiv = document.getElementById("CopyableDiv").cloneNode();
	newDiv.id = "none";

	var sortedPar = document.getElementById("SortedSection").cloneNode();
	sortedPar.innerHTML = formattedString;
	sortedPar.id = "SortedSection";
	sortedPar.style.cssFloat = "left";
	sortedPar.style.backgroundColor = "green";

	var unsortedPar = document.getElementById("UnsortedSection").cloneNode();
	unsortedPar.innerHTML = otherString;
	unsortedPar.id = "UnsortedSection";
	unsortedPar.style.cssFloat = "center";
	unsortedPar.style.backgroundColor = "red";

	newDiv.appendChild(sortedPar);
	newDiv.appendChild(unsortedPar);
	div.appendChild(newDiv);

	if (elementSwapped == "sorted") {

		parElement = document.createElement("p")
		parElement.innerHTML = "----- The list is now sorted!";
		div.appendChild(parElement);
	}
	else if (elementSwapped == "" || minElement == "") {

		parElement = document.createElement("p")
		parElement.innerHTML = "Beginning the sort the list. Grab the smallest element from the entire array.";
		div.appendChild(parElement);

		return;
	}
	else {

		parElement = document.createElement("p")
		parElement.innerHTML = "----- minimum element of right list was " + elementSwapped;
		div.appendChild(parElement);

		parElement = document.createElement("p")
		parElement.innerHTML = "----- swapped this element with " + minElement;
		div.appendChild(parElement);
	}
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
	outputSortedString(integerArray, stepnum, "", "");

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
		outputSortedString(integerArray, stepnum, integerArray[min], integerArray[i]);
	}

	outputSortedString(integerArray, stepnum + 1, "sorted", "sorted")
}

