    var interval;
    var msec = 0;
    var sec = 0;
    var min = 0 ;
    var msecText = document.getElementById("msec");
    var secText = document.getElementById("sec");
    var minText = document.getElementById("min");
    var i = 1;

function timer() {
    msec++;
    msecText.innerHTML = msec;
    if (msec >= 100) {
        sec++;
        secText.innerHTML = sec;
        msec = 0;
        msecText.innerHTML = 0;
    } else if (sec >= 60) {
        min++;
        minText.innerHTML = min;
        sec = 0;
        msecText.innerHTML = 0;
    }
}
function start() {
   interval = setInterval(timer, 10);

   document.getElementById('pause').disabled = false;
   document.getElementById('reset').disabled = false;
   document.getElementById('save').disabled = false;
   document.getElementById('start').disabled = true;

}

function pause() {
    clearInterval(interval);

    document.getElementById('pause').disabled = true;
    document.getElementById('start').disabled = false;
}

function reset() {
    clearInterval(interval);

    msecText.innerHTML = 0;
    secText.innerHTML = 0;
    minText.innerHTML = 0;

    document.getElementById('pause').disabled = true;
    document.getElementById('reset').disabled = true;
    document.getElementById('save').disabled = true;
    document.getElementById('start').disabled = false;
}

function save() {
    var data =  "<tr>"+
    "<td>"+ i +"</td>"+
    "<td>"+ min +":"+ sec +":"+ msec +"</td>";
    i++;
    $('tbody').append(data);
}