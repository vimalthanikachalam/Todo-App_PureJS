"use strict";

const task_content = document.getElementById("task_content");
const add_note = document.getElementById("add_note");
const card = document.getElementById("card");
const database = firebase.database().ref("data");

//Get input value
const addContent = () => {
  const value = task_content.value;
  if (value != "") {
    sendData(value);
  } else {
    alert("Input Value cannot be empty!! Please try again.");
  }
};

//Update to database
const sendData = (value) => {
  const list = database.child("todo_list");
  const key = list.push().key;
  list.update({ [key]: value }).then(console.log("Successfully Updated!"));
};

const getData = () => {
  database.on("value", (snapshot) => {
    const data = snapshot.val();
    card.innerHTML = "";
    Object.values(data).map((item) => {
      Object.values(item).map((val) => {
        card.innerHTML += `
          <div class="todo_card_container">
          <div class="todo_check">
              <ion-icon name="radio-button-off-outline"></ion-icon>
          </div>
          <div class="todo_content">
              <p class="todo_title">${val}</p>
              <p class="todo_desc">Task</p>
          </div>
          <div class="todo_fav">
              <ion-icon name="star-outline"></ion-icon>
          </div>
      </div>
          `;
      });
    });
  });
};

getData();
add_note.addEventListener("click", addContent);
