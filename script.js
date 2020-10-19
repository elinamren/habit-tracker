// selectors
const habitInput = document.querySelector('.habit-input');
const habitButton = document.querySelector('.habit-button');
const habitList = document.querySelector('.habit-list');

// Event listener
habitButton.addEventListener('click', addHabit);



// functions
function addHabit(event) {
	event.preventDefault();

	// create new div
	const habitDiv = document.createElement('div');
		// add classlist


	// create new li
	const newHabit = document.createElement('li');

	// show your input on new habit row
	newHabit.innerText = habitInput.value; 
	

		// add classlist

	// append new habit inside habit div
	habitDiv.appendChild(newHabit);

	// create delete button

// append habit divs into habit list
habitList.appendChild(habitDiv);

// clear input field
habitInput.value = '';

}








