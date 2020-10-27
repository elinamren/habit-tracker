// selectors
const habitInput = document.querySelector(".habit-input");
const habitButton = document.querySelector(".habit-button");
const habitList = document.querySelector(".habit-list");
const dateContainer = document.querySelector(".date-container");
const habitContainer = document.querySelector(".habit-container");
let colors = ['#E89CFB', '#9ED35B', '#FFE178', '#FFBB36', '#FFA7F1'], index = 0;
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// Event listener
habitButton.addEventListener("click", addHabit);
habitList.addEventListener("click", deleteHabit);


// functions
//get the current month
let d = new Date();
let n = months[d.getMonth()];
let currentMonth = document.querySelector('.month');
currentMonth.innerText = n;

//draw date
function drawDate (){
	const emptyDiv = document.createElement("div");
	emptyDiv.classList.add("empty-div");
	dateContainer.appendChild(emptyDiv);

  //days in the month small div with numbers
  for (let i = 0; i<=30 ;  i++) {
  	const dates = document.createElement("div");
  	dates.classList.add("date-box");
  	dates.innerText = i+1;
  	dateContainer.appendChild(dates);
  } 
}
//calling the drawDate function
drawDate ();

// add habits 
function addHabit(event) {
	event.preventDefault();

  // habit row div ---------------------
  const habitRow = document.createElement("div");
  habitRow.classList.add("habit-row");
  
  // create new div -----------------------
  const habitDiv = document.createElement("div");
  habitDiv.classList.add('habit');

  // add color span
  let colorPicker = document.createElement("span");
  colorPicker.classList.add("color-picker");

   // pick the next color in the color array
   colorPicker.style.background = colors[index];
   index = (index + 1) % colors.length;   

  // append colorPicker to habit div
  habitDiv.appendChild(colorPicker);


  // create new li ---------------------
  const newHabit = document.createElement("li");
  // show your input on new habit row
  newHabit.innerText = habitInput.value;
  // add classlist
  newHabit.classList.add('habit-item')
  // append new habit inside habit div
  habitDiv.appendChild(newHabit);

  // create delete button ---------------------
  const deleteButton = document.createElement("button");
  //add delete icon to button
  deleteButton.innerHTML = '<i class="fas fa-times"></i>';
  //add a class to delete button
  deleteButton.classList.add("delete-button");
  //append new delete button inside habit div
  habitDiv.appendChild(deleteButton);

  // append habit divs into habit row --------------------
  habitRow.appendChild(habitDiv);

  // add date checkboxes to boxes div 
  for (let i = 0; i<=30 ;  i++) {
  	const checkBox = document.createElement("div");
  	checkBox.classList.add("check-box");
  	habitRow.appendChild(checkBox);
  }
  habitList.appendChild(habitRow);
  habitContainer.appendChild(habitList);

  // call check box function
  checkBox();

  // clear input field
  habitInput.value = "";
  
}

//delete button
function deleteHabit(e) {
	const item = e.target;
	if (item.classList[0] === "delete-button") {
		const habit = item.parentElement.parentElement;
		habit.remove();
	};
};

// checkbox function
function checkBox() {
  const box = document.querySelectorAll(".check-box");
  box.forEach(function(element) {
    element.onclick = e => {
      if (element.childNodes.length == 0) {
      	const checkmark = document.createElement('span');
		checkmark.classList.add ('planned');
		element.appendChild(checkmark);
      } else if (element.childNodes[0].classList.contains("planned")) {
        element.childNodes[0].classList.remove ('planned');
		element.childNodes[0].classList.add ('checked');
      } else {
      	element.childNodes[0].remove();
      }
      countPlanned ();
    };
  });
};

let spans = [];
function countPlanned () {
	const boxes = document.querySelectorAll(".check-box");
	let element = boxes.childNodes[0];
	boxes.forEach(function(element) {
		if(element.childNodes[0].classList.contains("planned")) {
			spans.push(element.childNodes[0].classList.contains("planned"))
		} else {
			checked.push(element.childNodes[0].classList.contains("checked"));
	};
	console.log(spans);
	console.log(checked);
});
}


	// const nodesSameClass = box.getElementsByClassName("planned");
	// console.log(nodesSameClass.length);

	// const grandParent = document.querySelector('boxes');
	// const box = document.querySelectorAll(".check-box");
	// box

