// selectors
const habitInput = document.querySelector(".habit-input");
const habitButton = document.querySelector(".habit-button");
const habitList = document.querySelector(".habit-list");
// ---- E L I N -----//
const headerContainer = document.querySelector('.header-container');


// Event listener
habitButton.addEventListener("click", addHabit);
habitList.addEventListener("click", deleteHabit);

// functions


// ----- E L I N ------ //
function drawDays() {
  const headerDiv = document.createElement('div');
  headerDiv.classList.add('header-div');
  headerContainer.appendChild(headerDiv);

  for (let i = 0; i < 30; i++) {
    const headerBox = document.createElement('div');
    headerBox.classList.add('header-box');
    headerBox.innerText = i + 1;
    headerContainer.appendChild(headerBox);
    console.log('adding boxes')
  }
}

drawDays();
//-------------------------//



function addHabit(event) {
  event.preventDefault();

  // create new DIV ------------------
  const habitDiv = document.createElement("div");
  // add classlist
  habitDiv.classList.add('habit');


  // ---- E L I N => create div for habit title
  const habitTitle = document.createElement('div');
  habitTitle.classList.add('habit-title');
  //-------------------------------------------

  // create new LI -------------------
  const newHabit = document.createElement("li");
  // show your input on new habit row
  newHabit.innerText = habitInput.value;
  // add classlist
  newHabit.classList.add('habit-item')
  // append new habit inside habit div
  habitTitle.appendChild(newHabit);


  // create delete BUTTON ---------------
  const deleteButton = document.createElement("button");
  //add delete icon to button
  deleteButton.innerHTML = '<i class="fas fa-times"></i>';
  //add a class to delete button
  deleteButton.classList.add("delete-button");
  //append new delete button inside habit div
  habitTitle.appendChild(deleteButton);

  habitDiv.appendChild(habitTitle)

  // ----- E L I N => Create habit check boxes ----
  for (let i = 0; i < 30; i++) {
    const habitBox = document.createElement('div');
    habitBox.classList.add('habit-box');
    habitDiv.appendChild(habitBox);
  }


  // append habit divs into habit list --------
  habitList.appendChild(habitDiv);
  // clear input field
  habitInput.value = "";
}

//delete button
function deleteHabit(e) {
  const item = e.target;
  if (item.classList[0] === "delete-button") {
    const habit = item.parentElement;
    const grandpa = habit.parentElement;
    grandpa.remove();
  }
}



