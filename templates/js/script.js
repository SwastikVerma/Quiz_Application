const jsonDataString = localStorage.getItem("jsonData");
const data = JSON.parse(jsonDataString);

let minutes = 20;
let seconds = 0;
let timerInterval = setInterval(function () {
  if (seconds === 0) {
    if (minutes === 0) {
      clearInterval(timerInterval);
      onSubmit();
      alert("Time's up!");
    } else {
      minutes--;
      seconds = 59;
    }
  } else {
    seconds--;
  }

  let formattedMinutes = minutes.toString().padStart(2, "0");
  let formattedSeconds = seconds.toString().padStart(2, "0");
  document.getElementById(
    "heading"
  ).textContent = `${formattedMinutes}:${formattedSeconds}`;
}, 1000);


console.log(data);

let question = document.querySelector("#queId"),
  option1 = document.querySelector("#opt1Id"),
  option2 = document.querySelector("#opt2Id"),
  option3 = document.querySelector("#opt3Id"),
  option4 = document.querySelector("#opt4Id"),
  label1 = document.querySelector("[for = opt1Id]"),
  label2 = document.querySelector("[for = opt2Id]"),
  label3 = document.querySelector("[for = opt3Id]"),
  label4 = document.querySelector("[for = opt4Id]");

let current = 0,
  prev = document.querySelector("#btnPrev"),
  next = document.querySelector("#btnNext");

const selected_option = new Array(20).fill(0);

question.textContent = data[0]["question"];
label1.textContent = data[0]["opa"];
label2.textContent = data[0]["opb"];
label3.textContent = data[0]["opc"];
label4.textContent = data[0]["opd"];

button_check();

function nextQuestion() {
  //before going to next i want to save the value of the checked option
  option_check();
  console.log(selected_option);

  colour_check();
  //updating pointer
  current++;
  //checking button validity
  button_check();
  //checking displaying validity
  if (current < 20) {
    display();
  }
}

function previousQuestion() {
  option_check();
  console.log(selected_option);

  colour_check();

  current--;

  button_check();

  if (current >= 0) {
    display();
  }
}

function button_check() {
  if (current > 0) prev.disabled = false;
  else prev.disabled = true;
  if (current < 19) next.disabled = false;
  else next.disabled = true;
}

function option_check() {
  if (option1.checked) {
    selected_option[current] = 1;
  } else if (option2.checked) {
    selected_option[current] = 2;
  } else if (option3.checked) {
    selected_option[current] = 3;
  } else if (option4.checked) {
    selected_option[current] = 4;
  }
}

function colour_check() {
  let gridnum = document.getElementsByClassName((current + 1).toString(10));
  if (selected_option[current] != 0) {
    gridnum[0].classList.add("marked");
  } else {
    gridnum[0].classList.add("read");
  }
}

function display() {
  if (selected_option[current] == 0) {
    option1.checked = false;
    option2.checked = false;
    option3.checked = false;
    option4.checked = false;
  } else if (selected_option[current] == 1) {
    option1.checked = true;
  } else if (selected_option[current] == 2) {
    option2.checked = true;
  } else if (selected_option[current] == 3) {
    option3.checked = true;
  } else {
    option4.checked = true;
  }
  question.textContent = data[current]["question"];
  label1.textContent = data[current]["opa"];
  label2.textContent = data[current]["opb"];
  label3.textContent = data[current]["opc"];
  label4.textContent = data[current]["opd"];
}

function changeTo(curr) {
  option_check();
  colour_check();
  current = curr - 1;
  button_check();
  display();
}



function onSubmit() {
  option_check();
  colour_check();
  window.localStorage.setItem('options', JSON.stringify(selected_option));
  window.location.href='/result';

}


