// selectors
const container = document.querySelector(".container");
const dateList = document.querySelector('.date-list');
const habitList = document.querySelector(".habit-list");
const habitInput = document.querySelector(".habit-input");
const habitButton = document.querySelector(".habit-button");

// const dateList = document.querySelector(".date-list");
const listContainer = document.querySelector(".list-container");
var now = new Date();
const colors = ['red', 'green', 'yellow', 'blue'];


// Event listener
habitButton.addEventListener("click", addHabit);
habitList.addEventListener("click", deleteHabit);

// functions
function daysInThisMonth() {
	return new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
}

var days = daysInThisMonth();

function drawHeader() {
	const emptyBox = document.createElement("div");
  	emptyBox.classList.add('emptybox');
  	emptyBox.innerHTML = '';
  	dateList.appendChild(emptyBox);	

	for (let i = 0; i < days; i++) {
  	const date = document.createElement("div");
  	date.classList.add('date');
  	date.innerHTML = i + 1;
  	dateList.appendChild(date);
  	}

}

drawHeader();

function addHabit(event) {
  event.preventDefault();

  // create new divs
  const habitDiv = document.createElement("div");
  const calendarDiv = document.createElement("div");
  
  // add classlist
  habitDiv.classList.add('habit');
  calendarDiv.classList.add('calendar');
  
  // add color span
  const colorPicker = document.createElement("span");

  // for (let h = 0; h < colors.legnth; h++){

  // 	// colorPicker.style.background = colors[h];
  // 	console.log(colors[h]);
  // }

  colorPicker.style.borderRadius = '50%';
  colorPicker.style.width = '1rem';
  colorPicker.style.height = '1rem';
  colorPicker.style.background = 'red';


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
   

  for (let i = 0; i < days; i++) {
  	const box = document.createElement("div");
  	box.classList.add('box');
  	box.innerHTML = '';
  	calendarDiv.appendChild(box);
  }

  // append new habit inside habit div
  habitDiv.appendChild(colorPicker);
  habitDiv.appendChild(newHabit);
  habitList.appendChild(habitDiv);
  habitList.appendChild(calendarDiv);


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
    const habit = item.parentElement;
    habit.remove();

    // const row = ;
    // row.remove();
  }
}

