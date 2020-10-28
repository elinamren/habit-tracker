// selectors
const habitInput = document.querySelector(".habit-input");
const habitButton = document.querySelector(".habit-button");
const habitList = document.querySelector(".habit-list");
const dateContainer = document.querySelector(".date-container");
const habitContainer = document.querySelector(".habit-container");
const monthText = document.querySelector('.month');
const mainContainer = document.querySelector('.container');
const form = document.querySelector('.form');
const colorinput = document.createElement("input");


// Event listener
document.addEventListener('DOMContentLoaded', getHabits);
habitButton.addEventListener("click", addHabit);
habitList.addEventListener("click", deleteHabit);
colorinput.addEventListener("input", updateValue);

// functions

// get the current month and put text in h2
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let date = new Date();
let n = months[date.getMonth()];
monthText.innerText = n;


//Get days in current month
function daysInThisMonth() {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}
let days = daysInThisMonth();


//draw date container
function drawDate (){
  const emptyDiv = document.createElement("div");
  emptyDiv.classList.add("empty-div");
  dateContainer.appendChild(emptyDiv);

  //drawing all teh days in current month in date container
  for (let i = 0; i<days;  i++)
  {
    const dates = document.createElement("div");
    dates.classList.add("date-box");
    dates.innerText = i+1;
    dateContainer.appendChild(dates);
  } 

}
// draw date function --- calling the empty container
drawDate ();

// adding habits



function addHabit(event) {
  event.preventDefault();
  // habit row div
  const habitRow = document.createElement("div");
  habitRow.classList.add("habit-row");
  
  // create new div -----------------------
  const habitDiv = document.createElement("div");
  // add classlist
  habitDiv.classList.add('habit');

  // create new li ---------------------
  const newHabit = document.createElement("li");
  // show your input on new habit row
  newHabit.innerText = habitInput.value;
  // add classlist
  newHabit.classList.add('habit-item')
  // append new habit inside habit div
  habitDiv.appendChild(newHabit);

  //add habit to local storage
  saveLocalHabits(habitInput.value);

  // create delete button ---------------------
  const deleteButton = document.createElement("button");
  //add delete icon to button
  deleteButton.innerHTML = '<i class="fas fa-times"></i>';
  //add a class to delete button
  deleteButton.classList.add("delete-button");
  //append new delete button inside habit div
  habitDiv.appendChild(deleteButton);
 
  // append habit divs into habit list --------------------
  habitRow.appendChild(habitDiv);
  // adding dates (checkboxes) to new habit
  for (let i = 0; i<days ;  i++)
  {
    const checkBoxes = document.createElement("div");
    checkBoxes.classList.add("check-box");
    habitRow.appendChild(checkBoxes);
  } 
  habitList.appendChild(habitRow);
  habitContainer.appendChild(habitList);
  
  checkedUnchecked();

  // clear input field
  habitInput.value = "";
}

// color picker 
const colordiv = document.createElement("div");
colordiv.classList.add("color-div");
colordiv.innerText = "Color Picker";
colordiv.style.background = "#DB6400";


colorinput.classList.add("color-picker");
colorinput.type = "color";
colorinput.value = "#DB6400";


colordiv.appendChild(colorinput);
form.appendChild(colordiv);

function updateValue(e){
  colordiv.style.background = e.target.value;
};



//delete button
function deleteHabit(e) {
  const item = e.target;
  if (item.classList[0] === "delete-button") {
    const habit = item.parentElement.parentElement;
    removeLocalHabits(habit);
    habit.remove();
    
  }
}

// ----- plan - check - uncheck --- 
function checkedUnchecked() {
  const checkBoxes = document.querySelectorAll('.check-box');
  checkBoxes.forEach(function(element) {
    element.onclick = e => {
    if (element.childNodes.length == 0) {
      const checkMark = document.createElement('span');
      checkMark.classList.add('planned');
      element.appendChild(checkMark);
      element.childNodes[0].style.border = "solid";
      element.childNodes[0].style.borderColor = colorinput.value;
    } else if (element.childNodes[0].classList.contains('planned')) {
      element.childNodes[0].classList.remove('planned');
      element.childNodes[0].classList.add('checked');
      element.childNodes[0].style.background = colorinput.value;
    } else {
    element.childNodes[0].remove();
    };
    };
  });
}



// ----- LOCAL STORAGE
function saveLocalHabits(habit) {
  // check do I have something in my local storage?
  let habits;
  if(localStorage.getItem('habits') === null){
    habits = [];
  } else {
    habits = JSON.parse(localStorage.getItem('habits'));
  }

  habits.push(habit);
  localStorage.setItem('habits', JSON.stringify(habits));
}


function getHabits() {
    // check do I have something in my local storage?
    let habits;
    if(localStorage.getItem('habits') === null){
      habits = [];
    } else {
      habits = JSON.parse(localStorage.getItem('habits'));
    }
    habits.forEach(function(habit){

      // habit row div
      const habitRow = document.createElement("div");
      habitRow.classList.add("habit-row");

      // create new div -----------------------
      const habitDiv = document.createElement("div");
      // add classlist
      habitDiv.classList.add('habit');

      // create new li ---------------------
      const newHabit = document.createElement("li");
      // show your input on new habit row
      newHabit.innerText = habit;
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

      // append habit divs into habit list --------------------
      habitRow.appendChild(habitDiv);
      // adding dates (checkboxes) to new habit
      for (let i = 0; i<days ;  i++)
      {
        const checkBoxes = document.createElement("div");
        checkBoxes.classList.add("check-box");
        habitRow.appendChild(checkBoxes);
      } 
      habitList.appendChild(habitRow);
      habitContainer.appendChild(habitList);

      checkedUnchecked();


    })
}

// remove item from local storage
function removeLocalHabits(habit){
  let habits;
  if(localStorage.getItem('habits') === null){
    habits = [];
  } else {
    habits = JSON.parse(localStorage.getItem('habits'));
  }
  const habitIndex = habit.children[0].children[0].innerText;
  habits.splice(habits.indexOf(habitIndex), 1);
  localStorage.setItem('habits', JSON.stringify(habits));
 
}

