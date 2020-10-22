// selectors
const container = document.querySelector(".container");
const dateContainer = document.querySelector('.date-container');
const habitContainer = document.querySelector(".habit-container");
const habitInput = document.querySelector(".habit-input");
const habitButton = document.querySelector(".habit-button");
var now = new Date();


// Event listener
habitButton.addEventListener("click", addHabit);
habitContainer.addEventListener("click", deleteHabit);

// functions
function daysInThisMonth() {
	return new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
}

var days = daysInThisMonth();

function drawHeader() {
	const emptyBox = document.createElement("div");
	emptyBox.classList.add('emptybox');
	emptyBox.innerHTML = '';
	dateContainer.appendChild(emptyBox);	

	for (let i = 0; i < days; i++) {
		const date = document.createElement("div");
		date.classList.add('date');
		date.innerHTML = i + 1;
		dateContainer.appendChild(date);
	}

}

drawHeader();

function addHabit(event) {
	event.preventDefault();

  // create new divs
  const row = document.createElement("div");
  const habitDiv = document.createElement("div");
  const calendarDiv = document.createElement("div");
  
  // add classlist
  row.classList.add('row');
  habitDiv.classList.add('habit');
  calendarDiv.classList.add('calendar');
  
  // create new li
  const newHabit = document.createElement("li");
  const tracker = document.createElement("li");

  // show your input on new habit row
  newHabit.innerText = habitInput.value;
  tracker.innerText = 'test';

  // add color span
  let colorPicker = document.createElement("span");

  // add color array
  const colors = ['#E89CFB', '#9ED35B', '#FFE178', '#FFBB36', '#FFA7F1'];

  // loop through color array
  for (let h = 0; h < colors.length; h++) {
  	const nextColor = h + 1;
  	colorPicker.style.background = colors[nextColor];
  // let randomColor = colors[Math.floor(Math.random()*colors.length)];
}

  	// colorPicker.style.background = randomColor;
  	colorPicker.style.borderRadius = '50%';
  	colorPicker.style.width = '1rem';
  	colorPicker.style.height = '1rem';


 	// add classlist
 	newHabit.classList.add('habit-item');
 	tracker.classList.add('tracker');

 	for (let i = 0; i < days; i++) {
 		const box = document.createElement("div");
 		box.classList.add('box');
 		box.innerHTML = '';
 		calendarDiv.appendChild(box);
 	}

  // append new habit inside habit div
  habitDiv.appendChild(colorPicker);
  habitDiv.appendChild(newHabit);
  row.appendChild(habitDiv);
  row.appendChild(calendarDiv);
  row.appendChild(tracker);
  habitContainer.appendChild(row);


  // create delete button
  const deleteButton = document.createElement("button");
  //add delete icon to button
  deleteButton.innerHTML = '<i class="fas fa-times"></i>';
  //add a class to delete button
  deleteButton.classList.add("delete-button");
  //append new delete button inside habit div
  habitDiv.appendChild(deleteButton);


  // clear input field
  habitInput.value = "";
}

//delete button
function deleteHabit(e) {
	const item = e.target;
	if (item.classList[0] === "delete-button") {
		const habit = item.parentElement.parentElement;
		habit.remove();

	}
}


