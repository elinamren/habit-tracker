// selectors
const habitInput = document.querySelector(".habit-input");
const habitButton = document.querySelector(".habit-button");
const habitList = document.querySelector(".habit-list");

// Event listener
habitButton.addEventListener("click", addHabit);
habitList.addEventListener("click", deleteHabit);

// functions
function addHabit(event) {
  event.preventDefault();

  // create new div
  const habitDiv = document.createElement("div");
  // add classlist

  // create new li
  const newHabit = document.createElement("li");
  // show your input on new habit row
  newHabit.innerText = habitInput.value;
  // add classlist
  // append new habit inside habit div
  habitDiv.appendChild(newHabit);

  // create delete button
  const deleteButton = document.createElement("button");
  //add delete icon to button
  deleteButton.innerHTML = '<i class="fas fa-times"></i>';
  //add a class to delete button
  deleteButton.classList.add(".delete-button");
  //append new delete button inside habit div
  habitDiv.appendChild(deleteButton);

  // append habit divs into habit list
  habitList.appendChild(habitDiv);

  // clear input field
  habitInput.value = "";
}

//delete button
function deleteHabit(event) {
  const item = event.target;
  if (item.classList[0] === "delete-button") {
    const habit = item.parentElement;
    habit.remove();
  }
}
