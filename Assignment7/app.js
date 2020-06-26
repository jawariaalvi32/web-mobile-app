function getData(data) {
    var result = document.getElementById('result');
    result.innerHTML += data;
}

function clearData() {
    var result = document.getElementById('result');
    var error = document.getElementById('error');
    var output = document.getElementById('output');
    error.innerText = "";
    result.innerText = "";
    output.innerText = "";
}

function clearlast() {
    var result = document.getElementById('result');
    var len = result.innerText.length;
    resultSplit = result.innerHTML.split();
    var remove = result.innerText.substring(0, len - 1)
    result.innerText = remove;
}

function calculate() {
    var result = document.getElementById('result');
    var output = document.getElementById('output');
    var len = result.innerText.length;
    resultSplit = result.innerHTML.split("");
    len = len - 1;

    if ( (resultSplit[len] == '/') || (resultSplit[len] == '*') || (resultSplit[len] == '-') || (resultSplit[len] == '+') ) {
        document.getElementById('error').innerText = 'Expression cannot end on operator';
    } else if ( (resultSplit[0] == '/') || (resultSplit[0] == '*') ) {
        document.getElementById('error').innerText = 'Expression cannot start with * or /';
    } else {
        output.innerHTML = eval(result.innerHTML);
    }
}