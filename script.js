// selectors
const habitInput = document.querySelector(".habit-input");
const habitButton = document.querySelector(".habit-button");
const habitList = document.querySelector(".habit-list");
const dateGrid = document.querySelector(".date-grid");
const calendarGrid = document.querySelector(".calendar-grid");
var now = new Date();
const trackerList = document.querySelector(".tracker-list");
const colors = ['red', 'green', 'yellow', 'blue'];

// Event listener
habitButton.addEventListener("click", addHabit);
habitList.addEventListener("click", deleteHabit);

// functions
function daysInThisMonth() {
	return new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
}

var days = daysInThisMonth();

function drawGrid() {
	for (let i = 0; i < days; i++) {
  	const date = document.createElement("div");
  	date.classList.add('date');
  	date.innerHTML = i + 1;
  	dateGrid.appendChild(date);
  	}
  	
  	const emptyBox = document.createElement("div");
  	emptyBox.classList.add('emptybox');
  	emptyBox.innerHTML = '';
  	habitList.appendChild(emptyBox);

  	const emptyBox2 = document.createElement("div");
  	emptyBox2.classList.add('emptybox');
  	emptyBox2.innerHTML = '';
  	trackerList.appendChild(emptyBox2);
}

drawGrid();

function addHabit(event) {
  event.preventDefault();

  // create new div
  const habitDiv = document.createElement("div");
  const calendarDiv = document.createElement("div");
  
  // add classlist
  habitDiv.classList.add('habit');
  
  // add color span
  const colorPicker = document.createElement("span");

  for (let i = 0; i < colors.legnth; i++){
  	colorPicker.style.background = colors[i];
  }

  colorPicker.style.borderRadius = '50%';
  colorPicker.style.width = '1rem';
  colorPicker.style.height = '1rem';

  // create new li
  const newHabit = document.createElement("li");
  const tracker = document.createElement("li");

  // show your input on new habit row
  newHabit.innerText = habitInput.value;
  tracker.innerText = 'test';

  // add classlist
  newHabit.classList.add('habit-item');
  tracker.classList.add('tracker');
  colorPicker.classList.add('color');

  // for (let i = 0; i < 100; i++){
  // 	newHabit.setAttribute("id", i);
  // 	calendarGrid.setAttribute("id", i);
  // 	tracker.setAttribute("id", i);
  // }
   


  // append new habit inside habit div
  habitDiv.appendChild(colorPicker);
  habitDiv.appendChild(newHabit);



  for (let i = 0; i < days; i++) {
  	const box = document.createElement("div");
  	box.classList.add('box');
  	box.innerHTML = '';
  	calendarGrid.appendChild(box);

  }

  gridTemplateColumns();

  // create delete button
  const deleteButton = document.createElement("button");
  //add delete icon to button
  deleteButton.innerHTML = '<i class="fas fa-times"></i>';
  //add a class to delete button
  deleteButton.classList.add("delete-button");
  //append new delete button inside habit div
  habitDiv.appendChild(deleteButton);

  // append habit divs into habit list
  habitList.appendChild(habitDiv);
  trackerList.appendChild(tracker);

  // clear input field
  habitInput.value = "";
}

// update the grid template column repeat to be the same number as days
function gridTemplateColumns() {
  document.querySelector('.calendar-grid').style.gridTemplateColumns = 'repeat(days, 2rem)';
}

//delete button
function deleteHabit(e) {
  const item = e.target;
  if (item.classList[0] === "delete-button") {
    const habit = item.parentElement;
    habit.remove();

    // const row = ;
    // row.remove();
  }
}

