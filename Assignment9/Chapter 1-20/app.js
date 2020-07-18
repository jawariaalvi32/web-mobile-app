// CHAPTER 1 -- ALERTS

// 1. Write a script to greet your website visitor using JS alert box.
function vistorGreetings() {
    alert('Assalom-u-Alaikum :)');
}

// 2. Write a script to display following message on your web page.
function errorMsg() {
    alert("Error! Please enter a valid password");
}

// 3. Write a script to display following message on your web page: 
// (Hint : Use line break)
function welcome() {
    alert("Welcome to JS land... \n Happy Coding");
}

// 4. Write a script to display following messages in sequence:
function msg() {
    alert("Welcome to JS Land");
    alert("Happy Coding!");
}

// 5. Generate the following message through browser’s
// developer console:
function consoleMsg() {
    console.log("Hello.. I can run throgh my web browser console");
}

// 6. Make use of alerts in your new/existing HTML & CSS
// project.
// 7. Practice placement of <script></script> element in
// following sections of your project in exercise 6:
// a. Head
// b. Body (before your page’s HTML)
// c. Body (inside your page’s HTML)
// d. Body (after your page’s HTML)

// -------------------------------------------------------------------------------------------

// Chapter #2 VARIABLES FOR STRING

// 1.Declare a variable called username. 
var username;

// 2. Declare a variable called myName & assign to it a string that represents your Full Name.
var myName = "Jawaria Alvi";

// 3. Write script to Display the message in alert box. 
function titledMsg() {
    var msg = "Hello World";
    alert(msg);
}

//  4. Write a script to save student’s bio data in JS variables and show the data in alert boxes. 
function saveData() {
    var name = "Name : Jawaria Alvi";
    var age = "20 yeras old";
    var course = "Certified Web and Mobile Appliction developer"
    alert(name);
    alert(age);
    alert(course);
}

// 5. Write a script to display the following alert using one JS variable: 
function printPizza() {

    var i , j;
    var pizza ="pizza";
    var str = pizza.split("");

    for(i = 4; i > 0; i--) {
        pizza += "\n";
        for(j = 0; j < i; j++) {
            pizza += str[j];
        }
    }
    alert(pizza);
}

// 6. Declare a variable called email and assign to it a string that represents your Email Address
function email() {
    var email = "example@gmail.com";
    alert("My email address is"+ email);
}

// 7. Declare a variable called book & give it the value “A smarter way to learn JavaScript” also display in alert box.
function bookName() {
    var book = "A Smarter way to learn Javascript";
    alert("I am trying to learn"+ book);
}
 
//  8. Write a script to display this in browser through JS 
function browserMsg() {
    document.write("Yay! I can write HTML content through JS");
} 

// 9. Store following string in a variable and show in alert and browser through JS
//  “▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬” 
function printDesign() {
    alert("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬");
}

// --------------------------------------------------------------------------------------------------------------------
// Chapter #3 VARIABLES FOR NUMBERS 

// 1. Declare a variable called age & assign to it your age. Show your age in an alert box. 
function age() {
    age = 20;
    alert("I am"+ age +"years old");
}

// 2. Declare & initialize a variable to keep track of 
// how many times a visitor has visited a web page.
function displayCounter() {
    // check if the localStorage object is supported by the browser
    if ('localStorage' in window && window['localStorage'] !== null) {
        // if the counter has been defined, increment its value, // otherwise, set it to 0
        ('counter' in localStorage && localStorage['counter'] !== null) ? localStorage['counter']++ : localStorage['counter'] = 0;
        var visits = document.getElementById('visits');
        if (!visits) { return };
        // display the counter on screen
        visits.innerHTML = 'You visited this page ' + localStorage['counter'] + ' times.';
    }
}
// call the 'displayCounter()' function when the web page is loaded
window.onload = function () {
    displayCounter();
}
 
//  3. Declare a variable called birthYear & assign to it your birth year and display in browser.
function birthYear() {
    var birthYear = 1999;
    alert("My birth year is"+ birthYear +"\n Data type of my decleared variable is"+typeof birthYear);
}

// 4. A visitor visits an online clothing store www.xyzClothing.com .
// Take inputs and Show the message : “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”. 
function visitors() {
    var name = document.getElementById("name").value;
    var t=productTitle = document.getElementById("title").value;
    var quantity = document.getElementById("quantity").value;
    document.write(name +"ordered"+ quantity +" "+ productTitle +"on my Clothing Store");
}

// ---------------------------------------------------------------------------------------------------------------
// Chapter #4 VARIABLE NAMES: LEGAL & ILLEGAL 

// 1. Declare 3 variables in one statement. 
var a,b,c;

// 2. Declare 5 legal & 5 illegal variable names. 
// legal
// var _abc, helloWorld, $xyz;
// // illegal
//  var = .ddd, ddd<, 1hh;

// 3. Display this in your browser 
// a)  A heading stating “Rules for naming JS variables”
//  b)  Variable names can only contain ______, ______, ______ and ______. For example $my_1stVariable 
// c) Variables must begin with a ______, ______ or _____. 
// For example $name, _name or name 
// d) Variable names are case _________ 
// e) Variable names should not be JS _________ 
function display() {
    document.getElementById("h1").innerHTML = "Rules for naming JS variables";
    document.getElementById("p").innerHTML = "Variable names can only contain number, $, and _. For example $my_1stVariable <br> Variables must begin with a $ or _. <br> Variable names are case sensitive <br> Variable names should not be JS keywords";
}

// ---------------------------------------------------------------------------------------
// Chapter # 5 MATH EXPRESSIONS 

// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.  
 function sum() {
    var ip1 = prompt("Enter a Value", "0");
    var ip2 = prompt("Enter a Value", "0");
    var sum = parseInt(ip1) + parseInt(ip2);
    console.log(ip1, ip2);
     document.write("Sum of "+ ip1 +" and "+ ip2 +" is "+ sum);
 }

//  2. Repeat task1 for subtraction, multiplication, division & modulus. 
function sub() {
    var ip1 = prompt("Enter a Value", "0");
    var ip2 = prompt("Enter a Value", "0");
    var sub = parseInt(ip1) - parseInt(ip2);
    console.log(ip1, ip2);
     document.write("Sum of "+ ip1 +" and "+ ip2 +" is "+ sub);
 }
 function mul() {
    var ip1 = prompt("Enter a Value", "0");
    var ip2 = prompt("Enter a Value", "0");
    var mul = parseInt(ip1) * parseInt(ip2);
    console.log(ip1, ip2);
     document.write("Sum of "+ ip1 +" and "+ ip2 +" is "+ mul);
 }
 function div() {
    var ip1 = prompt("Enter a Value", "0");
    var ip2 = prompt("Enter a Value", "0");
    var div = parseInt(ip1) / parseInt(ip2);
    console.log(ip1, ip2);
     document.write("Sum of "+ ip1 +" and "+ ip2 +" is "+ div);
 }

// 3. Do the following using JS Mathematic Expressions 
// a. Declare a variable. 
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”. 
// c. Initialize the variable with some number. 
// d. Show the value of variable in your browser like “Initial value: 5”. 
// e. Increment the variable. 
// f. Show the value of variable in your browser like “Value after increment is: 6”. 
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value  after addition is: 13”. 
// i. Decrement the variable. 
// j. Show the value of variable in your browser like “Value after decrement is: 12”. 
// k. Show the remainder after dividing the variable’s value by 3. 
//  l. Output : “The remainder is : 0”. 
 function math() {
     var data = 2;
     document.write("Value after variable declaration is: "+ data);
     document.write("Variable initial value: "+ data);
     data++;
     document.write("After increment: "+ data);
     data += 7;
     document.write("Value after addition: "+ data);
     data--;
     document.write("After decrement: "+ data);
     data %= 3;
     document.write("Remainder after dividing: "+ data);

 }

//  4. Cost of one movie ticket is 600 PKR.
//  Write a script to store ticket price in a variable &
//  calculate the cost of buying 5 tickets to a movie.
function ticketsPrice() {
    priceOf1 = 600;
    priceOf5 = 600 * 5;
    document.write("Price of 5 movie tickets"+ priceOf5);
}

// 5. Write a script to display multiplication table of any number in your browser.
function table() {
    for(i = 1; i <= 10; i++) {
        var mul = 4 * i;
        document.write("4 * "+ i +" = "+ mul);
        document.write("<br>");
    }
}

// 6. The Temperature Converter:
function converter() {
    var fahrenheittemp = prompt("Enter a Value", "0");
    var celciusTemp = prompt("Enter a Value", "0");
    var celciusConv = (parseInt(fahrenheittemp) - 32) * 5 / 9;
    var FahrenheitConv = (parseInt(celciusTemp) * 9/5) + 32;

    document.write(fahrenheittemp +" Fahrenheit = "+ celciusConv +" Celcius");
    document.write("<br>");
    document.write(celciusTemp +" Celsius = "+ FahrenheitConv +" Fahrenheit");
}

// 7. Write a program to implement checkout process of a
// shopping cart.Compute the total cost & show the receipt in your browser
function receipt() {
    var priceOfItem1 = 100;
    var priceOfItem2 = 55;
    var shippingCharges = 100;
    var quantit1 = parseInt(prompt("Enter a Value", "0"));
    var quantity2 = parseInt(prompt("Enter a Value", "0"));
    var cost = (priceOfItem1 * quantit1) + (priceOfItem2 * quantity2) + shippingCharges;

    document.write("<h1>Shopping Cart</h2>");
    document.write("<br>");
    document.write("Price of Item 1 is "+priceOf1);
    document.write("<br>");
    document.write("Quantity of Item 1 is "+quantit1);
    document.write("<br>");
    document.write("Price of Item 2 is "+priceOf2);
    document.write("<br>");
    document.write("Quantity of Item 2 is "+quantity2);
    document.write("<br>");
    document.write("Total cost of your order "+cost);
}

// 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage.

function percentage() {
    var totalMarks = 500;
    var marksObtained = parseInt(prompt("Enter a Value", "0"));
    var per = (marksObtained / totalMarks) * 100

    document.write("<h1>Marks Sheet</h2>");
    document.write("Total Marks "+totalMarks);
    document.write("<br>");
    document.write("Marks Obtained "+marksObtained);
    document.write("<br>");
    document.write("Percentage "+per);
}

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
function currencyConverter() {
    var dollars = 10;
    var riyal = 25;
    var PKR = (dollars * 104.80) + (riyal * 28);
    document.write("<h1>Currency In PKR</h2>");
    document.write("Total currency in PKR " +PKR);
}

// 10. Do arithmetic in following sequence: Perform all calculations in a single expression
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
function arithmetic() {
    var calc = 0;
    calc = ((calc + 5) * 10) /2;
    document.write(calc);
}

// 11. The Age Calculator:
function ageCalculater() {
    var currentYear = 2021;
    var birthYear = parseInt(prompt("Enter a Value", "0"));
    var age = (currentYear - birthYear);

    document.write("Current Year" +currentYear);
    document.write("<br>");
    document.write("BIrth Year "+birthYear);
    document.write("<br>");
    document.write("Your age "+age);
}

// 12. The Geometrizer: 
// Calculate the circumference and area based on the radius
function geometrizer() {
    var rad = 20;
    var circumference = 2 * 3.142 + rad;
    var area = 3.142 * math.pow(rad,2);

    document.write("<h1>The Geometrizer</h1>");
    document.write("<br>");
    document.write("Radius of a circle "+rad);
    document.write("<br>");
    document.write("Circumference "+circumference);
    document.write("<br>");
    document.write("Area "+area);
}

// 13. The Lifetime Supply Calculator: 
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
function lifeTime(params) {
    var currentAge = 20;
    var estimatedAge = 65;
    var snacksPerDay = 2;
    var res = (estimatedAge - currentAge) * snacksPerDay;
    document.write("<h1>The Lifetime Supply Calculator: </h1>");
    document.write("<br>");
    document.write("Favourite snacks nutella");
    document.write("<br>");
    document.write("Current age "+currentAge);
    document.write("<br>");
    document.write("Estimated age "+estimatedAge);
    document.write("<br>");
    document.write("Amount of snacks per day "+snacksPerDay);
    document.write("<br>");
    document.write("You will need "+ res +"spoons of nutella to last untill the ripe old age of "+ estimatedAge);
}

// Chapter #6-9 MATH EXPRESSIONS 

// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result 
function name(params) {
    var val=10;
    ++val;
    document.write("<br>" + "The value of ++a is"+val);
    document.write("<br>" + "Now The value of ++a is"+val);
    val++;
    document.write("<br>" + "The value of a++ is"+val);
    document.write("<br>" + "Now The value of a++ is"+val);
    --age;
    document.write("<br>" + "The value of --a is"+val);
    document.write("<br>" + "Now The value of --a is"+val);
    age--;
    document.write("<br>" + "The value of a-- is"+val);
    document.write("<br>" + "Now The value of a-- is"+val);
}

function name(params) {
    
}
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write("<br>" + " a is "+a);
document.write("<br>" + "b is "+b);
document.write("<br>" + " Result is "+result);
// 3. Write a program that takes input a name from user &
// greet the user.
function name() {
    var name = prompt("Your Name?", );
    alert("Welcome "+name);
}

// 5. Write a program to take input a number from user &
// display it’s multiplication table on your browser.By default 5
function tbl() {
    var num = prompt("Enter Number", "5")

    var num = parseInt(num);
    var i = 0;
    document.write("<br>" + "<h1>" + "Table" + "</h1>");
    document.write('<table border="1" cellspacing="0">');
    for(i=1;i<10;i++) {
        document.write("<br>" + num + " x " + i + " = " + num*i);
    }
}
// 6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)

function result() {
    var sub1 = prompt("Enter Subject 1 Name?", );
    var sub2 = prompt("Enter Subject 2 Name?", );
    var sub3 = prompt("Enter Subject 3 Name?", );
    tot=300;
    var sub1m = +prompt("Enter Subject 1 Marks?", );
    var sub2m = +prompt("Enter Subject 2 Marks?", );
    var sub3m = +prompt("Enter Subject 3 Marks?", );
    var otot= sub1m+sub2m+sub3m;
    var per=(otot/tot)*100;
    document.write("<tr><td>" + sub1 +" " + tot +" "  + sub1m  +" "  + per + "</td></tr>");
    document.write("<tr><td>" + sub2  +" " +   tot  +" " + sub2m +" "   + per + "</td></tr>");
    document.write("<tr><td>" + sub3 +" "  + tot +" "  + sub3m  +" "  + per + "</td></tr>");

}
// Chapter #9 & 10 - USER INPUT & CONDITIONAL STATEMENT
//1. Write a program to take “city” name as input from user. If
// user enters “Karachi”,print “Welcome to city of lights”
function cityWelcome() {
    var city = prompt("Enter City Name?", );
    if(city == "karachi"){
        alert("Welcome to the city of lights");
    }
}
// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.
function gender() {
    var gen=prompt("Enter Your Gender?", );
    if(gen=="male"){
        alert("Welcome sir");
    }
    if(gen=="female"){
        alert("Welcome Ma'am");
    }
}

//3. Write a program to take input color of road traffic signal
// from the user & show the message according to the table:
function signalColor() {
    var gen=prompt("Enter Traffic Signal Color?", );
    if(gen=="red"){
        alert("Must stop");
    }
    else if(gen=="yellow"){
        alert("Ready to move");
    }
    else if(gen=="Green"){
        alert("move no");
    }
}

//4. Write a program to take input remaining fuel in car (in
// litres) from user. If the current fuel is less than 0.25litres,
// show the message “Please refill the fuel in your car”
function fuel() {
    var fuel;
    fuel=+prompt("Enter fuel in liters", );
    if (fuel==0.25){
        alert("Please refill the fuel in your car");
    }
}

//task 5
 var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
 if (true){
alert("True");
}
if (false){
alert("False");
}

 if("car" < "cat"){
alert("car is smaller than cat");
}
// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. 
function percentage() {
    document.write("<br>" + "<h1>" + "Mark sheet" + "</h1>");
    var sub1 = prompt("Enter Subject 1 Name?", );
    var sub2 = prompt("Enter Subject 2 Name?", );
    var sub3 = prompt("Enter Subject 3 Name?", );
    tot=300;
    var sub1m = +prompt("Enter Subject 1 Marks?", );
    var sub2m = +prompt("Enter Subject 2 Marks?", );
    var sub3m = +prompt("Enter Subject 3 Marks?", );
    var otot= sub1m+sub2m+sub3m;
    var per=(otot/tot)*100;
    if(per=>80)
    document.write("<br>"  +"Total marks: " + tot + "<br> " + "Marks obtained:"  + otot  +"<br>" + "Percentage:"  + per + "<br>" + "Grade: A+" + "<br>" + "Remarks: Excellent");
    else if(per=>70 && per <=80){
    document.write("<br>"  +"Total marks: " + tot + "<br> " + "Marks obtained:"  + otot  +"<br>" + "Percentage:"  + per + "<br>" + "Grade: A" + "<br>" + "Remarks: Good");}

    else if(per=>60 && per<=70)
    document.write("<br>"  + "Total marks: " + tot + "<br> " + "Marks obtained:"  + otot  +"<br>" + "Percentage:"  + per + "<br>" + "Grade: B" + "<br>" + "Remarks: You Need to improve");

    else (per=>60 )
    document.write("<br>"  + "Total marks: " + tot + "<br> " + "Marks obtained:"  + otot  +"<br>" + "Percentage:"  + per + "<br>" + "Grade: Fail" + "<br>" + "Remarks: Sorry");
}
// 7. Guess game:

// 8. Write a program to check whether the given number is
// divisible by 3. 
function divisibleBy3() {
    var num = prompt("Enter Number",);
    if(num % 3 == 0)
    alert("number is divisible by 3");
}
// 9. Write a program that checks whether the given input is an
// even number or an odd number.
function evenOdd() {
    var num = prompt("Enter Number","0");
    if(num % 2 == 0)
    alert("number is even");
    else
    alert("number is odd");
}
// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
function tempMsg() {
    var temp = prompt("Enter Tempreature","0");
    if(temp > 40)
     alert("Temprature is too hot");
    else if(temp > 30 && temp < 40)
     alert("Weather is Normal");
    else if(temp > 20 && temp < 30)
     alert("Weather is Cool");
    else if(temp > 10 && temp < 20)
     alert(" OMG Weather is so Cold");
}
// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. 
function calculator() {
    var num1 = prompt("Enter Number","0");
    var num2 = prompt("Enter 2nd Number","0");
    var op = prompt("Enter operator");
    if (op == "+") {
        res = num1 + num2;
    } else if (op == "-") {
        res = num1 - num2;
    } else if (op == "*") {
        res = num1 * num2;
    } else (op == "/") 
        res = num1 / num2;
    
    document.write(res);
}

// Chapter #12 & 13 - IF…ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS 

// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter.
function ASCII() {
    var ip =prompt("Enter character");
    if (ip >= 'A' && ip <= 'Z') {
    alert(ip +"is an UpperCase character"); 
    } else if (ip >= 'a' && ip <= 'z') {
        alert(ip +"is an LowerCase character"); 
    } else{
    alert(ip +"is not an aplhabetic character"); 
    }
}

//2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.
function printLarger() {
    var num1, num2;
    num1 = prompt("Input the First integer", "0");
    num2 = prompt("Input the second integer", "0");
                                                    
    if(parseInt(num1) > parseInt(num2)) { 
        alert("The larger of "+ num1+ " and "+ num2+ " is "+ num1+ ".");
    } else if(parseInt(num2, 10) > parseInt(num1, 10)) {
        alert("The larger of "+ num1+" and "+ num2+ " is "+ num2+ ".");
    } else {
        alert("The values "+ num1+ " and "+num2+ " are equal.");
    }
}
  //3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.
function posNeg()
{
    num1 = prompt("Input the First integer", "0");
    if (num1 < 0) 
    {
        document.write("Negative Number");
    }
    else if (num1 > 0)
    {
       document.write("Positive Number");
    }
    else 
    {
        document.write("0");
    }
}
// 4. Write a program that takes a character (i.e. string of
// length 1) and returns true if it is a vowel, false otherwise
 
function vowel() {
    var vowel_string = "aieouAIEOU";
    input = prompt("Enter a character");
    if (input.length == 1){
      if (vowel_string.contains(input)){
           alert(input + " is a vowel");
        }
        else {
            alert("Not a vowel");
        }
    }  
}
//5. Task 5
var num = prompt("Enter Password", );
    var pas = prompt("Enter Your Password", );

    if(num==pas)
    alert("Password is Correct");
    else("wrong pasword");
// Task 6 Error correction
function passwordValidation() {
    var greeting;
    var hour = 13;
    if (hour < 18) {
        greeting = "Good day";
    }
    else {
        greeting = "Good evening";
    }
}
// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements
function time() {
    var time = parseInt(promt("Enter time"));
    if ((time >= 0000) && (time < 1200)) {
        document.write("Good Morning");
    } else if ((time >= 1200) && (time < 1700)) {
        document.write("Good Afternoon");
    } else if ((time >= 1700) && (time < 2100)) {
        document.write("Good Evening");
    } else ((time >= 2100) && (time < 2359)) 
        document.write("Good Night");
}

//chap #14-16 - ARRAYS
//1. Declare an empty array using JS literal notation to store student names in future.
//2. Declare an empty array using JS object notation to store student names in future.
var arrayA = [];


//3. Declare and initialize a strings array.
var cars = ["Saab", "Volvo", "BMW"];
//4. Declare and initialize a numbers array.
var num = [10, 20, 30];
//5. Declare and initialize a boolean array.
var boolArray = [true, false];
//6. Declare and initialize a mixed array.
var cars = ["Saab", "Volvo", true, 14, 12];

//7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
//     BS, BCOM, MS, M. Phil., PhD). Show the listed
//     qualifications in your browser like
var qual=["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.PHIL", "PHD"];
var i = 1;
for(qual = 0; qual < 8; qual++){
    document.write("<h1>Qualifications</h1><br>");
    document.write(i +") "+ qual +"<br>");
    i++;
}
// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:
var students = ["Jawaria", "Saba", "Rooha"];
var scores = [400, 490, 480];

for (var i=0; i < students.length; i++) {
       document.write("Scores of "+ students[i] +"is"+ scores[i]);
       var per = (scores[i]/500)*100;
       document.write("Percentage: "+ per);
}

//10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method
function sort() {
    let numbers = [80, 1 , 2, 3, 10, 20, 30 ];
    numbers.sort();
    console.log(numbers);
}

//11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
document.write(cities);
var selectedCities = cities.slice(1,3);
document.write(selectedCities);

// 12. Write a program to create a single string from the
// below mentioned array: var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)
var arr = ["This ", " is" , " my ", " cat"];
document.write(arr.join(""));

// 13. Create a new array. Store values one by one in (FIFO-First In First Out)
var que=new Array();
que.push("keyboard");
que.push("mouse");
que.push("printer");
que.push("moniter");
alert(que.shift());
alert(que.shift());
alert(que.shift());
alert(que);

// 14. Write a program to store phone manufacturers (Apple,
// Samsung, Motorola, Nokia, Sony & Haier) in an array.
// Display the following dropdown/select menu in your
// browser using document.write() method:
var que=new Array();
que.push("keyboard");
que.push("mouse");
que.push("printer");
que.push("moniter");
alert(que.pop());
alert(que.pop());
alert(que.pop());
alert(que);

// Chapter #17-20 - ARRAYS AND LOOP 

// 1. Declare and initialize an empty multidimensional array.
var emptyArray = [[],[]];
// 2. Declare and initialize a multidimensional array
// representing the following matrix:
var multiArray = [[0,1,2,3], [1,0,1,2], [2,1,0,1]];

//3. Write a program to print numeric counting from 1 to 10.
function count() {
    for (i = 0; i < 10; i++) {
        document.write(i +"<br>");
    }
}

// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user
function randomTbl() {
    var num = parseInt(prompt("Enter no for tbl", "0"));
    var len = parseInt(prompt("Enter lenghth of tbl", "0"));

    for (i = 0; i <= len; i++) {
        res = i * num;
        document.write(num +" * "+ i +" = "+ res);
        document.write("<br>");
    }
}

// 5. Write a program to print items of the following array
// using for loop:
function arrayItem() {
    array = ["Mango", "Banana", "Strawberry"];
    for (i = 0; i < 3; i++) {
        document.write(array[i] +"<br>");
    }
}

// Task 6
function counting() {
    for (i = 0; i <= 10; i++) {
        document.write(i +", ");
    }
}
function reverseCounting() {
    for(i = 10; i > 0; i--) {
        document.write(i +", ");
    }
}
function even() {
    for(i = 1; i < 10; i++) {
        if(i%2 == 0)
        document.write(i +", ");
    }
}
function series() {
    for(i = 1; i < 20; i++) {
        if(i%2 == 0)
        document.write(i +"k, ");
    }
}
// 7. Array searching 
function searching() {
    var ip = prompt("Enter the value you want to search");
    array = ["Mango", "Banana", "Peaches", "KIwi"];
    var a = 0;
    for (i = 0; i < array.length; i++) {
        if (ip == array[i]) {
            if (ip == array[i]) {
                a++;
            }      
        }
    }
    if (a > 0){
        document.write(array[i] +"is available");
    } else {
        document.write("Not available");
    }
}
// 8. Largest number in array
function largestNo() {
    var array = [8, 3, 6, 7, 33, 6];
    var max = array[0];
    for(i = 0; i < array.length; i++) {
        if (array[max] < array[i]) {
            max = array[i];
        }
    }
    document.write(max);
}

// 9. Smallest Number
function smallestNo() {
    var array = [8, 3, 6, 7, 33, 6];
    var min = array[0];
    for(i = 0; i < array.length; i++) {
        if (array[min] > array[i]) {
            min = array[i];
        }
    }
    document.write(min);
}

// Write a program to print multiples of 5 ranging 1 to 100.
function multipleOf5() {
    for (i = 1; i <= 100; i++) {
        if (i % 5 == 0) {
            document.write(i);
            document.write(", ");
        }
    }
}