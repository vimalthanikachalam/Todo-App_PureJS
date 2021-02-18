"use strict";

const task_content = document.getElementById("task_content");
const add_note = document.getElementById("add_note");
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
  const key = user.push().key;
  list.update({ [key]: value }).then(console.log("Successfully Updated!"));
};

add_note.addEventListener("click", addContent);
