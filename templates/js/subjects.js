
// Get the list of subject names from the variable
const subjectNames = [
  "Biochemistry",
  "ENT",
  "Orthopaedics",
  "Miscellaneous",
  "Psychiatry",
  "Forensic Medicine",
  "Pharmacology",
  "Gynaecology & Obstetrics",
  "Pathology",
  "Anaesthesia",
  "Dental",
  "Skin",
  "Social & Preventive Medicine",
  "Radiology",
  "Medicine",
  "Physiology",
  "Surgery",
  "Microbiology",
  "Anatomy",
  "Ophthalmology",
  "Pediatrics",
];

// Create an HTML element for each subject
const subjectElements = subjectNames.map((subjectName) => {
  const subjectElement = document.createElement("li");
  subjectElement.textContent = subjectName;

  // Create a new button element
  const button = document.createElement("button");
  button.subjectName = subjectName;
  button.textContent = "Start quiz";
  button.classList.add("start-quiz-button");

  subjectElement.appendChild(button);

  return subjectElement;
});

// Append the HTML elements to the DOM
const subjectsList = document.getElementById("subjects");
subjectElements.forEach((subjectElement) => {
  subjectsList.appendChild(subjectElement);
});

const startQuizButtons = document.querySelectorAll(".start-quiz-button");
let cookie = document.cookie;
let csrfToken = cookie.substring(cookie.indexOf('=') + 1);



var data;

startQuizButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    const subjectName = button.subjectName;
    console.log(subjectName);

    const response = await fetch(`http://localhost:8000/start_quiz/?subject_name=${subjectName}`);
    data = await response.json();
    console.log(typeof data);

    // Check if data is undefined
    if (data === undefined) {
      return;
    }
    window.localStorage.setItem('jsonData', JSON.stringify(data));
    window.location.href = '/question';
  });
});

 


/*
const startQuizButtons = document.querySelectorAll(".start-quiz-button");
let cookie = document.cookie;
let csrfToken = cookie.substring(cookie.indexOf('=') + 1);

// Add an event listener to each button element
startQuizButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Get the subject name from the button element
    const subjectName = button.subjectName;

    // Create an AJAX request to the `/start_quiz` endpoint
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/start_quiz');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('X-CSRFToken', csrfToken);

    // Prepare the JSON data to be sent
    const jsonData = {
      subjectName: subjectName
    };

    // Send the AJAX request
    xhr.send(JSON.stringify(jsonData));

    // Handle the response from the server
    xhr.onload = () => {
      if (xhr.status === 200) {
        // On successful submission, redirect to the `question.html` page
        window.location.href = '/login';
      } else {
        // Handle any errors
        console.error('Error starting quiz:', xhr.statusText);
      }
    };
  });
});
*/
/*
const startQuizButtons = document.querySelectorAll(".start-quiz-button");
let cookie = document.cookie;
let csrfToken = cookie.substring(cookie.indexOf('=') + 1);

// Add an event listener to each button element
startQuizButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Get the subject name from the button element
    const subjectName = button.subjectName;

    // Create an AJAX request to the `/start_quiz` endpoint
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/start_quiz');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('X-CSRFToken', csrfToken);

    // Prepare the JSON data to be sent
    const jsonData = {
      subjectName: subjectName
    };

    // Send the AJAX request
    xhr.send(JSON.stringify(jsonData));

    // Handle the response from the server
    xhr.onload = () => {
      if (xhr.status === 200) {
        // On successful submission, make a GET request to `/get_questions`
        const xhr2 = new XMLHttpRequest();
        xhr2.open('GET', `/get_questions?subject_name=${subjectName}`);
        xhr2.setRequestHeader('Content-Type', 'application/json');

        xhr2.onload = () => {
          if (xhr2.status === 200) {
            // Parse the JSON response and populate the question page with the data
            const questionData = JSON.parse(xhr2.responseText);
            const questions = questionData.questions;
            for (const question of questions) {
              const questionElement = document.createElement('div');
              questionElement.innerHTML = `
                <p>${question.question_text}</p>
                <ul>
                  <li>${question.answer_choices[0]}</li>
                  <li>${question.answer_choices[1]}</li>
                  <li>${question.answer_choices[2]}</li>
                  <li>${question.answer_choices[3]}</li>
                </ul>
              `;
              document.getElementById('question-container').appendChild(questionElement);
            }
          } else {
            // Handle any errors
            console.error('Error getting questions:', xhr2.statusText);
          }
        };

        xhr2.send();
      } else {
        // Handle any errors
        console.error('Error starting quiz:', xhr.statusText);
      }
    };
  });
});

*/




