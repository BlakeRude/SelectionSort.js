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

	// Selection Sort Algorithm
	var i = 0;
	var j = 0;
	var min = 0;
	var temp = 0;
	var stepnum = 0;

	// Print before any sorting, step 0.
	// Can delete if you want
	outputSortedString(integerArray, stepnum);

	for(i = 0; i < (integerArray.length-1); i++)
	{
		min = i;
		for(j = i+1; j < integerArray.length; j++)
		{
			if(integerArray[j] < integerArray[min])
			{
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

// the place is the step of the sorting
// the sorted string is the currently sorted, or being sorted,
// 	integer array
function outputSortedString(sortedString, place) {


	// format this into an html element

}