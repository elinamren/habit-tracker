// selectors
const habitInput = document.querySelector(".habit-input");
const habitButton = document.querySelector(".habit-button");
const habitList = document.querySelector(".habit-list");
const dateContainer = document.querySelector(".date-container");
const habitContainer = document.querySelector(".habit-container");

// Event listener
habitButton.addEventListener("click", addHabit);
habitList.addEventListener("click", deleteHabit);


// functions

//draw date container
function drawDate (){
  const emptyDiv = document.createElement("div");
  emptyDiv.classList.add("empty-div");
  dateContainer.appendChild(emptyDiv);

  //days in the month small div with numbers
  for (let i = 0; i<=30 ;  i++)
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
  for (let i = 0; i<=30 ;  i++)
  {
    const checkBoxes = document.createElement("div");
    checkBoxes.classList.add("check-box");
    habitRow.appendChild(checkBoxes);
  } 
  habitList.appendChild(habitRow);
  habitContainer.appendChild(habitList);

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

