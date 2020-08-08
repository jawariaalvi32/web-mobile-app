//Student Name

let name = prompt("PLEASE ENTER YOUR FULL NAME", 'Guest');
let userName = document.getElementById('userName');
userName.innerHTML = 'Student Name: ' + name
let cof = confirm("Are you ready?")
if (cof == true) {
    start();
} else if (cof == false) {
    op1.disabled = true;
    op3.disabled = true;
    op2.disabled = true;
    op4.disabled = true;
}

// options variable declare with id
let id = document.getElementById('q1');
let op1 = document.getElementById('opt1');
let op2 = document.getElementById('opt2');
let op3 = document.getElementById('opt3');
let op4 = document.getElementById('opt4');

//First Question Show
function showQuestion() {
    heading.innerHTML = "QUIZ APP <br>Question 1/" + questionsArray.length;
    id.innerHTML = questionsArray[0].question;
    op1.innerHTML = questionsArray[0].option[0];
    op2.innerHTML = questionsArray[0].option[1];
    op3.innerHTML = questionsArray[0].option[2];
    op4.innerHTML = questionsArray[0].option[3];


}
//Question Array
var questionsArray = [{
        question: "What is extension of javascript?",
        answer: "js",
        option: ["docx", "js", "html", "css"]
    }, {
        question: "Which tag use for BIGGEST heading?",
        answer: "h1",
        option: ['button', 'img', 'h1', 'a']
    }, {
        question: "Can we use attribute in any tag?",
        answer: "yes",
        option: ['yes', 'no', 'may be', 'never']
    }, {
        question: "What does HTML stand for?",
        answer: "Hyper Text Markup Language",
        option: ['Home Technology Market Langauge', 'Hyperlink and Text Markup Language', 'Home Tool Markup Language', 'Hyper Text Markup Language']
    }, {
        question: "Who is the making Web standards?",
        answer: "The World Wide Web Consortium",
        option: ['Mozaila', 'The World Wide Web Consortium', 'Microsoft', 'Google']
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        answer: "br",
        option: ['br', 'li', 'break', 'lb']
    }, {
        question: "What is the correct HTML for adding a background color?",
        answer: "body style='background-color:yellow;'",
        option: ["body style='background-color:yellow;'", "body style='backgroundColor:yellow;'", "body bg='yellow'", "none of them"]
    }, {
        question: "Choose the correct HTML element to define important text",
        answer: "strong",
        option: ['b', 'strong', 'important', 'em']
    }, {
        question: "Choose the correct HTML element to define emphasized text",
        answer: "em",
        option: ['i', 'em', 'br', 'italic']
    }, {
        question: "Which character is used to indicate an end tag?",
        answer: "/",
        option: ['/', '<', '*', '^']
    }, {
        question: "Inline elements are normally displayed without starting a new line.",
        answer: "true",
        option: ['true', 'false', 'may be', 'depends on condition']
    },
    {
        question: "Which of these elements are all <table> elements?",
        answer: "'table' 'tr' 'td'",
        option: ["'html' 'head' 'table'", "'thead' 'tbody' 'tt'", "'table' 'tr' 'td'", "'table' 'tr' 'body'"]
    }, {
        question: "How can you make a numbered list?",
        answer: "'ol'",
        option: ["'ul'", "'li'", "'ol'", "'dl'"]
    },
    {
        question: "How can you make a bulleted list?",
        answer: "'ul'",
        option: ["'ul'", "'df'", "'ol'", "'dl'"]
    },
    {
        question: "What is the correct HTML for making a checkbox?",
        answer: "input type='checkbox'",
        option: ["'check'", "'checkbox", "input type='check'", "input type='checkbox'"]
    },
    {
        question: "What is the correct HTML for making a text input field?",
        answer: "input type='text'",
        option: ["'textfield'", "input type='textfield'", "input type='text'", "textinput type='text'"]
    },
    {
        question: "What is the correct HTML for making a drop-down list?",
        answer: "'select'",
        option: ["'list'", "'select'", "input type='list'", "input type='dropdown'"]
    },
    {
        question: "What is the correct HTML for making a text area?",
        answer: "'textarea'",
        option: ["input type='textarea'", "'none of them'", "'textarea'", "input type='textbox'"]
    },
    {
        question: "What is the correct HTML for inserting an image?",
        answer: "img src='image.gif' alt='image'",
        option: ["img src='image.gif' alt='image'", "image src='image.gif' alt='image'", "img href='image.gif' alt='image'", "image  alt='image'"]
    },
    {
        question: "What is the correct HTML for inserting a background image?",
        answer: "body style='background-image:url(background.gif)'",
        option: ["img src='image.gif' alt='image'", "body bg='bbackground.gif)'", "body style='background-image:url(background.gif)'", "image  alt='image'"]
    }
]

//Create Timer
let Time = document.getElementById('time');
let sec = 0,
    mints = 0,
    interval,
    secHeading = document.getElementById('sec'),
    mintsHeading = document.getElementById('mint');

function timer() {
    sec++;
    secHeading.innerHTML = sec + " sec";
    if (sec >= 60) {
        mints++;
        mintsHeading.innerHTML = mints + " mints";
        sec = 0;
    }
    if (mints == 5) {
        sec = 0;
        secHeading.innerHTML = "0 sec";
        stopTime();
        finalSubmit();
        op1.disabled = true;
        op3.disabled = true;
        op2.disabled = true;
        op4.disabled = true;
        let NextBtn = document.getElementById('Nbtn')
        NextBtn.disabled = true;
    }
}

function start() {
    setInterval(timer, 1000);
}

function stopTime() {
    clearInterval(start)
}

function finalSubmit() {
    score.innerHTML = "<br>Score: " + scoreCount;
    stopTime()
}
let questionCount = 0;
let questionCountHeading = 1;
let heading = document.getElementById('heading');

// Next Button Function for next question
function show() {
    questionCount++
    nextQuesiton(questionCount);
    questionCountHeading++
    heading.innerHTML = "QUIZ APP <br>Question " + questionCountHeading + "/" + questionsArray.length;
    op1.disabled = false;
    op2.disabled = false;
    op3.disabled = false;
    op4.disabled = false;

    if (questionCount == (questionsArray.length - 1)) {
        submit()
    }
}

// Next Question Render in Screen
function nextQuesiton(e) {
    id.innerHTML = questionsArray[e].question;
    let optionsElement = document.getElementsByClassName('btn');
    for (var i = 0; i < 4; i++) {
        optionsElement[i].innerHTML = questionsArray[e].option[i];

    }
}

let score = document.getElementById('score');
let scoreCount = 0;
console.log(questionsArray.length)

function check(e) {
    for (var i = 0; i < questionsArray.length; i++) {
        if (e.innerHTML == questionsArray[i].answer) {
            scoreCount += 10;
            e.disabled = true;
            console.log(scoreCount)
        } else if (e.innerHTML != questionsArray[i].answer) {
            e.disabled = true;
            op1.disabled = true
            op2.disabled = true
            op3.disabled = true
            op4.disabled = true
        }
    }
}

function submit() {
    let Nbtn = document.getElementById("Nbtn");
    Nbtn.disabled = true;
    Nbtn.remove();
    let submitBtn = document.createElement('button');
    let submitBtnText = document.createTextNode('Done');
    submitBtn.setAttribute('class', 'btnNext');
    submitBtn.setAttribute('onclick', 'finalSubmit()');
    submitBtn.appendChild(submitBtnText);
    // let SubmitPage = document.createElement('a');
    // SubmitPage.setAttribute('href', 'newindex.htm');
    // SubmitPage.appendChild(submitBtn)
    let div = document.getElementById('btn');
    div.appendChild(submitBtn);

}