var jsonDataString = localStorage.getItem('jsonData');
var data = JSON.parse(jsonDataString);

var userDataString = localStorage.getItem('options');
var selected_option = JSON.parse(userDataString);
console.log(selected_option);
// console.log(selected_option);


let score = 0;
var qStatus = document.querySelectorAll(".qStatus"),
  ansStatus = document.querySelectorAll(".ansStatus"),
  tblItems = document.querySelectorAll(".alert"),
  result = document.querySelector("#result"),
  median = document.querySelector("#median"),
  message = document.querySelector(".status-footer"),
  wrongCnt = document.querySelector("#wrong"),
  Unattempted =document.querySelector("#Unattempted"),
  correctCnt = document.querySelector("#correct");
//   question = document.querySelectorAll(".question");

var cnt = 0;

for (let i = 0; i < 20; ++i) {
  if (qStatus[i] && ansStatus[i] && tblItems[i]) {
    qStatus[i].textContent = "Undefined";
    ansStatus[i].textContent = "0 Mark";
    tblItems[i].classList.add("alert-danger");
  }
}
var notattempted=0;
calc();

function calc() {
    console.log(selected_option);
    console.log(data);
  for (let i = 0; i < 20; i++) {
    if (selected_option[i] != 0) {
        if (selected_option[i] == data[i]["cop"]) {
            score += 4;
            cnt++;
            ansStatus[i].textContent = "4 Marks";
            tblItems[i].classList.remove("alert-danger");
            tblItems[i].classList.add("alert-success");
          } else {
            tblItems[i].classList.add("alert-danger");
            score -= 1;
            ansStatus[i].textContent = "-1 Mark";
          }
    }
    else{
        notattempted++;
    }
    qStatus[i].textContent =
    data[i]["question"] +
      "\n" +
      "A)" +
      data[i]["opa"] +
      "\n" +
      "B)" +
      data[i]["opb"] +
      "\n" +
      "C)" +
      data[i]["opc"] +
      "\n" +
      "D)" +
      data[i]["opd"] +
      "\n\n"+
      "Correct option: " + data[i]["cop"] + "\nExplaination: " + data[i]["exp"];
  }
  console.log(score);
  result.textContent = score;
  median.textContent = (score / 80) * 100;
  if (score<= 10) message.textContent = "Anyone who attempts is not a failure!!";
  else if (score>10 && cnt <= 40)
    message.textContent = "Needs Some Improvement!";
  else if (score>40 && cnt <= 60)
    message.textContent = "Practice makes Man Perfect!";
  else message.textContent = "Excellent!!";

  Unattempted.textContent=notattempted;
  correctCnt.textContent = cnt;
  wrongCnt.textContent = 20 - cnt-notattempted;
  window.localStorage.clear();
}

// let score = 0;
// var qStatus = document.querySelectorAll(".qStatus"),
//   ansStatus = document.querySelectorAll(".ansStatus"),
//   tblItems = document.querySelectorAll(".alert"),
//   result = document.querySelector("#result"),
//   median = document.querySelector("#median"),
//   message = document.querySelector(".status-footer"),
//   wrongCnt = document.querySelector("#wrong"),
//   correctCnt = document.querySelector("#correct");

// var cnt = 0;

// for (let i = 0; i < 20; ++i) {
//   if (qStatus[i] && ansStatus[i] && tblItems[i + 1]) {
//     qStatus[i].textContent = "Undefined";
//     ansStatus[i].textContent = "0 Mark";
//     tblItems[i + 1].classList.add("alert-danger");
//   }
// }
// calc();

// function calc(){
//     for (let i = 0; i < 20; i++) {
//         if (selected_option[i] == 0) {
//           continue;
//         }
//         if (selected_option[i] == data[i]["cop"]) {
//           score += 4;
//           cnt++;
//           ansStatus[i].textContent = "4 Marks";
//           tblItems[i + 1].classList.remove("alert-danger");
//           tblItems[i + 1].classList.add("alert-success");
//         } else {
//           score -= 1;
//           ansStatus[i].textContent = "-1 Mark";
//         }
//         qStatus[i].textContent =
//           "Correct option: " + data[i]["cop"] + "\nExplaination:" + data[i]["exp"];
//       }
//       console.log(score);
//       result.textContent = (cnt / 20) * 100;
//       median.textContent = (cnt / 20) * 100;
//       if (cnt <= 5) message.textContent = "Anyone who attempts is not a failure!!";
//       else if (cnt > 5 && cnt <= 10)
//         message.textContent = "Needs Some Improvement!";
//       else if (cnt > 10 && cnt <= 15)
//         message.textContent = "Practice makes Man Perfect!";
//       else message.textContent = "Excellent!!";
    
//       correctCnt.textContent = cnt;
//       wrongCnt.textContent = 20 - cnt;
// }