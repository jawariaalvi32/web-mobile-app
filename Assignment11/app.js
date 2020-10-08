var ques_counter = 0;
var total = 0;

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

function show() {
    var ques = document.getElementById("ques");
    var opt1 = document.getElementById("opt1");
    var opt2 = document.getElementById("opt2");
    var opt3 = document.getElementById("opt3");
    var opt4 = document.getElementById("opt4");

    ques.innerText = questionsArray[ques_counter].question;
    opt1.innerText = questionsArray[ques_counter].option[0];
    opt2.innerText = questionsArray[ques_counter].option[1];
    opt3.innerText = questionsArray[ques_counter].option[2];
    opt4.innerText = questionsArray[ques_counter].option[3];

    opt1.disabled = false;
    opt2.disabled = false;
    opt3.disabled = false;
    opt4.disabled = false;
    
}

function next() {
    ques_counter++;
    document.getElementById("num").innerText = "Question "+ques_counter+" of 20";

    if (ques_counter < questionsArray.length) {
        show();
        console.log(questionsArray.length);
    } else {
        result();
    }
}

function check(val) {
    val.disabled = true;
    if (val.innerText == questionsArray[ques_counter].answer) {
        total++;
        document.getElementById("total").innerText = "Total : " +total;
    } 
}

function result() {
    
    document.getElementById("quiz").remove();
    document.getElementById("result").style.display = "block";
    document.getElementById("remarks").innerText = "You attempt 20 questions and from that "+ total +" is correct.";
    document.getElementById("score").innerText = total;
}

