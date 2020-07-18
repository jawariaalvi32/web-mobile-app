// Chapter #38-48   -    FUNCTIONS, SWITCH STATEMENTS, WHILE… DOWHILE LOOPS

// 1. Write a custom function power ( a, b ), to calculate the value of
// a raised to b.
function power(a, b) {
   document.write(Math.pow(a,b));
}

// 2. Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.
function leapYear() {
    var ip = parseInt(prompt("Enter any year"));
    if (ip % 4 == 0) {
        document.write("Is a leap year");
    } else {
        document.write("Not a leap year");
    }
}

// 3. If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
function area(a,b,c) {
    var S = (a + b + c) / 2;
    var area = S * (S - a) * (S - b) * (S-c);
    document.write("area = " +area);
}

// 4. Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks Call those functions from mainFunction and display result in mainFunction.
function main(sub1, sub2, sub3) {
    var tot = sub3 + sub2 +sub1;
    avg(sub1,sub2,sub3);
    per(tot);
}
function avg(sub1,sub2,sub3) {
    return (sub3 + sub2 +sub1 / 3);
}
function per(tot) {
    return ((tot/300)*100);
}

// 5. You have learned the function indexOf. Code your own custom
// function that will perform the same functionality.
function ind() {
    var ip = prompt("Enter string");
    var ch = prompt("Enter ch for index");
    var str = ip.split('');
    var i = 0;
    while(i < str.length-1) {
        if (ch == str[i]) {
            document.write(i);
        }
        i++;
    }
}

// 6. Write a function to delete all vowels from a sentence.
function vowDel() {
    var ip = prompt("Enter string");
    var res = ip.replace(/[aeiou]/gi, '');
    document.write("After deleting vowels "+ res);
}

// 7. Write a function with switch statement to count the number of
// occurrences of any two vowels in succession in a line of text.
function occurance() {
    var ip = prompt("enter string");
    var s = ip.split('');
    var cnt = 0; 
    for (var i = 0; i < s.length - 1; i++) { 
        if (isVowel(s[i]) && isVowel(s[i + 1])) 
            cnt++; 
    } 
    console.log(cnt); 
}
function isVowel(ch) 
{ 
    switch (ch) { 
    case 'a': 
    case 'e': 
    case 'i': 
    case 'o': 
    case 'u': 
        return true; 
    default: 
        return false; 
    } 
} 
  

// 8. The distance between two cities (in km.) is input through the
// keyboard. Write four functions to convert and print this
// distance in meters, feet, inches and centimeters.
function metres(km) {
    document.write(km / 1000);
}
function feet() {
    document.write(km / 3280);
}
function inch() {
    document.write(km / 39370);
}
function cm() {
    document.write(km / 100000);
}
// 9. Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work
// for fractional part of an hour.
function OT() {
    var ip = prompt("Enter working hours");
    if (ip > 40) {
        var extraHr = ip - 40;
        var extraPay = extraHr * 12;
        document.write("ur extra pay :"+ extraPay);
    }
}
// 10. A cashier has currency notes of denominations 10, 50 and
// 100. If the amount to be withdrawn is input through the
// keyboard in hundreds, find the total number of currency notes of each denomination
function notes() {
    var ip = prompt("Enter currency");
    var cur = ip.split('');
    if (cur.length == 3) {
        op = cur[0] +" hundreds" + cur[1] +" tens "+ cur[2] +" ones ";
    } else if (cur.length == 2) {
        op = cur[0] +" tens "+ cur[1] +" ones ";
    } else if(cur.length == 1) {
        op = cur[0] +" ones ";
    }
    document.write("u have "+ op);
}


// --------------------------------------------------------------------

// Chapter #43-48    -  EVENTS
// 1. Show an alert box on click on a link.
function link() {
    alert("Hello");
}
// 2. Display some Mobile images in browser. On click on an
// image Show the message in alert to user.
function imgClck() {
    alert("Hello, This is img");
}

// 3. Display 10 student records in table and each row should contain a delete
// button. If you click on a button to delete a record, entire row should be deleted. 
function del(row) {
    var i = row.parentNode.parentNode.rowIndex;
    document.getElementById("tbl").deleteRow(i);
}
// 4. Display an image in browser. Change the picture on mouseover and set the
// first picture on mouseout.
function enter() {
    document.getElementById("imgHover").setAttribute("src","images/download (2).jpg")
}
function out() {
    document.getElementById("imgHover").setAttribute("src","images/download (1).jpg")
}

// 5. Show a counter in browser. Counter should increase on click on increase
// button and decrease on click on decrease button.
function inc() {
    var val = document.getElementById('counter');
    val.innerText++;
}
function dec() {
    var val = document.getElementById('counter');
    val.innerText--;
}

// --------------------------------------------------------------

// Chapter- 49-52  EVENTS

// 1. Create a signup form and display form data in your web
// page on submission.
function signup() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    document.write("Your email address is "+email+" and password is "+password);

}

// 2. When user clicks on “Read more” button, full detail of that particular item will be displayed.
function readmore() {
    document.getElementById("a").style.display = "none";
    document.getElementById("det").setAttribute("class", "");
}

// 3. Create a form which takes student’s details and show each student detail in
// table. Each row of table must contain a delete button and an edit button.
function del(row) {
    var ind = row.parentNode.parentNode.rowIndex;
    document.getElementById("tblWithEdit").deleteRow(ind);
}
function edit(row) {
    var nameRow = row.parentNode.parentNode.childNodes[3];
    var clsRow = row.parentNode.parentNode.childNodes[5];
console.log(row.parentNode.parentNode);
    document.getElementById("form-edit").style.display = "block";

    document.getElementById("save").onclick =  function() {
        var name = document.getElementById("name").value;
        var cls = document.getElementById("class").value;
        nameRow.innerHTML = name;
        clsRow.innerHTML = cls
    }

}
// Chapter 53- 58 Events 
function showInModal(img) {
    document.getElementById("modal-img").setAttribute("width","100%"); 
    document.getElementById("modal-img").setAttribute("src",img.src); 
}

// --------------------------------------------------

// Chapter 58 - 67 DOM
// 1 .
// Get element of id “main-content” and assign them in a variable.
// ii. Display all child elements of “main-content” element.
// iii. Get all elements of class “render” and show their innerHTML
// in browser.
// iv. Fill input value whose element id first-name using javascript.
// v. Repeat part iv for id ”last-name” and “email
function abc() {
    var mains = document.getElementById("main-content");
    console.log(mains.children);

    var render = document.getElementsByClassName("render");
    var i = 0;

    while(i < render.length-1) {
        console.log(render[i].innerHTML);
        i++;
    }
    
    document.getElementById("first-name").value = "Jawaria";
    document.getElementById("last-name").value = "Alvi";
    document.getElementById("email-id").value = "alvijawaria@gmail.com";

}


// 2. use HTML code of question 1 and show the result on browser.
// i. What is node type of element having id “form-content”.
// ii. Show node type of element having id “lastName” and its child node.
// iii. Update child node of element having id “lastName”.
// iv. Get First and last child of id “main-content”.
// v. Get next and previous siblings of id “lastName”.
// vi. Get parent node and node type of element having id “email”

function xyz() {
    var frm = document.getElementById("form-content");
    console.log(frm.nodeType);
    
    var LName = document.getElementById("lastName");
    console.log(LName.nodeType);
    console.log(LName.childNodes.nodeType);

    LName.innerHTML = "Alvi";

    var mains = document.getElementById("main-content");
    console.log(mains.firstChild);
    console.log(mains.lastChild);

    console.log(LName.nextSibling);
    console.log(LName.previousSibling);

    var email = document.getElementById("email-id");
    console.log(email.parentNode);
    console.log(email.nodeType);
}

