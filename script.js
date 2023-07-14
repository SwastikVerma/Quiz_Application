function validateUser() {
	let user = document.querySelector('#userId');
	let pass = document.querySelector('#passId');
	let status = document.querySelector('#btnSubmitId');
	if (user.value == 'admin' && pass.value == 'admin') {
		alert('Successfully Loged In');
		window.location = 'rules.html';
	} else {
		alert('Loged In Failed');
		status.classList.add('btn-danger');
		status.classList.remove('btn-success');
	}
}

var chk = 0;
function validateCheck() {
	let footer = document.querySelector('#labelCheckTnc');

	if (chk) chk = 0;
	else {
		chk = 1;
		footer.classList.remove('alert');
		footer.classList.remove('alert-danger');
	}
}

function startQuiz() {
	let footer = document.querySelector('#labelCheckTnc');

	if (chk == 1) window.location = 'question.html';
	else {
		footer.classList.add('alert');
		footer.classList.add('alert-danger');
	}
}

let que = document.querySelector('#queId'),
	opt1 = document.querySelector('#opt1Id'),
	opt2 = document.querySelector('#opt2Id'),
	opt3 = document.querySelector('#opt3Id'),
	opt4 = document.querySelector('#opt4Id'),
	label1 = document.querySelector('[for = opt1Id]'),
	label2 = document.querySelector('[for = opt2Id]'),
	label3 = document.querySelector('[for = opt3Id]'),
	label4 = document.querySelector('[for = opt4Id]');
 

var userAns = [],crtAnsDiv = document.querySelector('#crtAnsDiv'),
	crtAns = document.querySelector('#crtAns');

for (let i = 0; i < 20; ++i) userAns[i] = '-1';

let ques = [
	{
		q: 'Q1.In 2009 Indian Premier League who got the title of Player of the series?',
		o1: 'Adam Gilchrist',
		o2: 'Sachin Tendulkar',
		o3: 'Robin Uthappa',
		o4: 'Shane Watson',
		ans: 'Adam Gilchrist'
	},
	{
		q: 'Q2. Which team won the IPL (2009)?',
		o1: 'Deccan Chargers',
		o2: 'Chennai Super Kings',
		o3: 'Kolkata Knight Riders',
		o4: 'Delhi Daredevils',
		ans: 'Deccan Chargers'
	},
	{
		q: 'Q3. Which player scored most runs in IPL (2009)?',
		o1: 'Sanath Jaysuriya',
		o2: 'Sachin Tendulkar',
		o3: 'Matthew Hayden',
		o4: 'Virender Sehwag',
		ans: 'Sachin Tendulkar'
	},
	{
		q: 'Q4. Which cricketer has bowled the most number of dot balls in the IPL??',
		o1: 'Praveen Kumar',
		o2: 'Lasith Malinga',
		o3: 'Harbhajan Singh',
		o4: 'Sunil Narine',
		ans: 'Praveen Kumar'
	},
	{
		q: 'Q5. Which company replaced DLF as the new title sponsor in 2013 IPL?',
		o1: 'PepsiCo',
		o2: 'Hindustan Unilever',
		o3: 'Nokia',
		o4: 'Patanjali',
		ans: 'PepsiCo'
	},
	{
		q: 'Q6. Which International star performed in the opening ceremony of 2013 IPL?',
		o1: 'Jennifer Lopez',
		o2: 'Akon',
		o3: 'Pitbull',
		o4: 'None of the above',
		ans: 'Pitbull'
	},
	{
		q: 'Q7. Which team won the 2014 Indian Premier League tournament?',
		o1: 'Kolkata Knight Riders',
		o2: 'Chennai Super Kings',
		o3: 'Deccan Chargers',
		o4: 'Royal Challengers Bangalore',
		ans: 'Kolkata Knight Riders'
	},
	{
		q: 'Q8. Which team won Indian Premier League 2010?',
		o1: 'Chennai Super Kings',
		o2: 'Kolkata Knight Riders',
		o3: 'Deccan Chargers',
		o4: 'Delhi Daredevils',
		ans: 'Chennai Super Kings'
	},
	{
		q: 'Q9. Who hit the first century of IPL 2012?',
		o1: 'Adam Gilchrist',
		o2: 'Ajinkya Rahane',
		o3: 'Virat Kohli',
		o4: 'Ambati Rayudu',
		ans: 'Ajinkya Rahane'
	},
	{
		q: 'Q10. Who holds the infamous record of most number of ducks in IPL 2012?',
		o1: 'Manish Pandey',
		o2: 'Munaf Patel',
		o3: 'Morne Morkel',
		o4: 'None of the above',
		ans: 'Manish Pandey'
	},
	{
		q: 'Q11. Who hit the longest six in fifth edition of IPL?',
		o1: 'Chris Gayle',
		o2: 'Yusuf Pathan',
		o3: 'MS Dhoni',
		o4: 'Ajinkya Rahane',
		ans: 'MS Dhoni'
	},
	{
		q: 'Q12. Which team won the IPL (2013)?',
		o1: 'Mumbai Indians',
		o2: 'Kolkata Knight Riders',
		o3: 'Royal Challengers Bangalore',
		o4: 'Delhi Daredevils',
		ans: 'Mumbai Indians'
	},
	{
		q: 'Q13. In IPL 2010, who was the most Fan-Friendly Cricketer?',
		o1: 'Adam Gilchrist',
		o2: 'Virat Kohli',
		o3: 'Rohit Sharma',
		o4: 'Lasith Malinga',
		ans: 'Adam Gilchrist'
	},
	{
		q: 'Q14. In IPL 2010, who gave the best Debut Performance?',
		o1: 'Kieron Pollard',
		o2: 'Yusuf Pathan',
		o3: 'Praveen Tambe',
		o4: 'Ambati Rayudu',
		ans: 'Kieron Pollard'
	},
	{
		q: 'Q15. Which cricketer has taken most catches in ODI cricket?',
		o1: 'Ricky Ponting',
		o2: 'Mahela Jayawardene',
		o3: 'Jacques Kallis',
		o4: 'Mark Waugh',
		ans: 'Mahela Jayawardene'
	},
	{
		q: 'Q16. Which cricketer had scored fastest century in ODI cricket?',
		o1: 'Vivian Richards',
		o2: 'Corey Anderson',
		o3: 'Shahid Afridi',
		o4: 'AB de Villiers',
		ans: 'AB de Villiers'
	},
	{
		q: 'Q17. Which cricketer had scored most centuries in first-class cricket?',
		o1: 'Lane Hutton',
		o2: 'Wally Hammond',
		o3: 'Jack Hobbs',
		o4: 'Sachin Tendulkar',
		ans: 'Jack Hobbs'
	},
	{
		q: 'Q18. Which cricketer had scored highest individual score in ODI cricket?',
		o1: 'Virender Sehwag',
		o2: 'Chris Gayle',
		o3: 'Martin Guptill',
		o4: 'Rohit Sharma',
		ans: 'Rohit Sharma'
	},
	{
		q: 'Q19. Which cricketer had scored highest individual score in first-class cricket?',
		o1: 'Don Bradman',
		o2: 'Brian Lara',
		o3: 'Lane Hutton',
		o4: 'Gary Sobers',
		ans: 'Brian Lara'
	},
	{
		q: 'Q20. Which cricketers have recorded more than 100 sixes in Test cricket?',
		o1: 'Brendon McCullum and Chris Cranes',
		o2: 'Brendon McCullum and Jacques Kallis',
		o3: 'Brendon McCullum and Chris Gayle',
		o4: 'Brendon McCullum and Adam Gilchrist',
		ans: 'Brendon McCullum and Adam Gilchrist'
	}
];

let current = 0,
	prev = document.querySelector('#btnPrev'),
	next = document.querySelector('#btnNext'),
	cont = document.getElementsByClassName('cont');

if (current && current <= 19 && current>=0) {
	que.textContent = ques[current].q;
	label1.textContent = ques[current].o1;
	label2.textContent = ques[current].o2;
	label3.textContent = ques[current].o3;
	label4.textContent = ques[current].o4;
}

if (prev && current == 0) prev.disabled = true;

function nextQuestion() {
	++current;
	// let  gridnum = document.getElementsByClassName((current).toString(10));
	if (current == 20) { 
		document.querySelector('#indexBody').style.display = "none";
		document.querySelector('#resultBody').classList.remove('hide');
		clac();
	}

	if (current && current <= 19 && current>=0) { 
			// gridnum[0].classList.add("read");
		next.value='Next';
		opt1.checked = (userAns[current] == ques[current].o1);
		opt2.checked = (userAns[current] == ques[current].o2);
		opt3.checked = (userAns[current] == ques[current].o3);
		opt4.checked = (userAns[current] == ques[current].o4);
		console.log(userAns[current]);
		
	}
	
	if (current <= 0) {
		current = 0;
		prev.disabled = true;
	} else prev.disabled = false;

	if (current == 19)
		next.value = 'Finish Quiz';
	
	crtAnsDiv.style.display = 'none';
	crtAns.textContent = '';

	if (current <= 19 && current>=0) {
		que.textContent = ques[current].q;
		label1.textContent = ques[current].o1;
		label2.textContent = ques[current].o2;
		label3.textContent = ques[current].o3;
		label4.textContent = ques[current].o4;
	}
}

function previousQuestion() {
	--current;
	
	if (current >= 0 && current <= 19) {
		next.value='Next';
		opt1.checked = (userAns[current] == ques[current].o1);
		opt2.checked = (userAns[current] == ques[current].o2);
		opt3.checked = (userAns[current] == ques[current].o3);
		opt4.checked = (userAns[current] == ques[current].o4);
	}

	if (current <= 0) {
		current = 0;
		prev.disabled = true;
	} else prev.disabled = false;

	if (current == 19)
		next.value = 'Finish Quiz';
	
	crtAnsDiv.style.display = 'none';
	crtAns.textContent = '';

	que.textContent = ques[current].q;
	label1.textContent = ques[current].o1;
	label2.textContent = ques[current].o2;
	label3.textContent = ques[current].o3;
	label4.textContent = ques[current].o4;
}

function showAnswer() {
	if (current < 0) current = 0;
	if (current > 20) current = 20;

	crtAnsDiv.classList.remove('alert-danger');
	crtAnsDiv.style.display = 'block';
	crtAns.textContent = 'Correct Answer : ' + ques[current].ans;
}

function markAns(idx) {
	let  gridnum = document.getElementsByClassName((current+1).toString(10));
	if (idx == 1)
		userAns[current] = ques[current].o1;
	else if (idx == 2)
		userAns[current] = ques[current].o2;
	else if (idx == 3)
		userAns[current] = ques[current].o3;
	else
		userAns[current] = ques[current].o4;
		
	if(userAns[current]!='-1'){
		gridnum[0].classList.add("marked");
	}
}

function changeTo(curr){
	let  gridnum = document.getElementsByClassName((curr).toString(10));
	gridnum[0].classList.add("read");

	current = curr-1;
	current--;
	nextQuestion();

}

var qStatus = document.querySelectorAll('.qStatus'),
	ansStatus = document.querySelectorAll('.ansStatus'),
	tblItems = document.querySelectorAll('.alert'),
	result = document.querySelector('#result'),
	median = document.querySelector('#median'),
	message = document.querySelector('.status-footer'),
	wrongCnt = document.querySelector('#wrong'),
	correctCnt = document.querySelector('#correct');

var cnt = 0;
for (let i = 0; i < 20; ++i) {
	if (qStatus[i] && ansStatus[i] && tblItems[i + 1]) { 
		qStatus[i].textContent = 'Undefined';
		ansStatus[i].textContent = '0 Mark';
		tblItems[i+1].classList.add('alert-danger');
	}
}

function clac() {

	for (var i = 0; i < 20; ++i) { 
		if (userAns[i] == ques[i].ans) {
			++cnt;
			qStatus[i].textContent = ques[i].ans;
			ansStatus[i].textContent = "1 Mark";
			tblItems[i + 1].classList.remove('alert-danger');
			tblItems[i + 1].classList.add('alert-success');
		}
		else if (userAns[i] != -1) {
			qStatus[i].textContent = ques[i].ans;
		}
	}

	result.textContent = (cnt / 20)* 100;
	median.textContent = (cnt / 20)* 100;
	if (cnt <= 5)
		message.textContent = "Anyone who attempts is not a failure!!";
	else if (cnt > 5 && cnt <= 10)
		message.textContent = "Needs Some Improvement!";
	else if (cnt > 10 && cnt <= 15)
		message.textContent = "Practice makes Man Perfect!";
	else
		message.textContent = "Excellent!!";
	
	correctCnt.textContent = cnt;
	wrongCnt.textContent = 20 - cnt;
}