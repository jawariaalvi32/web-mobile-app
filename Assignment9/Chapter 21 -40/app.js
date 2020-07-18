// Chapter #21-25 - STRING METHODS 

// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.
function greetings() {
    var fName = prompt("Enter your name", "");
    var lName = prompt("Enter your last name");
    var fullNmae = fName + lName;
    alert("Welcome"+ fullNmae);
}
// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser
function iplength() {
    var model = prompt("Enter your favourite mobile phone model");
    document.write("My favourite phone is "+ model +"Length is "+ model.length);
}
// 3. Write a program to find the index of letter “n” in the word “Pakistani” 
function index() {
    var str = "PAkistani";
    document.write("String: "+ str +"<br> Index of 'n' is "+ str.indexOf('n'));
}
// 4. Write a program to find the last index of letter “l” in “Hello World”  
function lastIndex() {
    var str = "Hello World";
    document.write("String: "+ str +"<br> Last index of l : "+ str.lastIndexOf("l"));
}
// 5. Write a program to find the character at 3rd index in “Pakistani”
function thirdIndex() {
    var str = "Pakistani";
    document.write("String: "+ str +"<br> character at 3rd index is "+ str.charAt(3));
}
// 6. Repeat Q1 using string concat() method
function nameConcat() {
    var fName = prompt("Enter your name");
    var lName = prompt("Enter your last name");
    alert("Welcome"+ fName.concat(lName));
}
// 7. Write a program to replace the “Hyder” to “Islam” in “Hyderabad”
function replace() {
    var str = "Hyderabad";
    document.write("City: "+ str +"<br> After replacement "+ str.replace("Hyder", "Islam"));
}
// 8. Write a program to replace all occurrences of “and” in the string with “&” 
// var message = “Ali and Sami are best friends. They play cricket and football together.”;
function replaceAll() {
    var message = "Ali and Sami are best friends. They play cricket and football together."
    var res = message.replace(/and/g, '&');
    document.write(res);
}
// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.
function convertor() {
    var str = "472";
    document.write("VAlue "+ str +" Type: "+ typeof str);
    var num = parseInt(str);
    document.write("Value "+ num +" Type "+ typeof num)
}
// 10. Write a program that takes user input. Convert it in capital letters.
function upperCase() {
    var str = prompt("Enter string");
    var res = str.toUpperCase();
    document.write(res);
}
// 11. Write a program that takes user input. Convert title case.
function titleCase() {
    var str = prompt("Enter string");
    var lowerCase = str.toLowerCase();
    var split = lowerCase.split(" ");
    for(i = 0; i < split.length; i++) {
        split[i] = split[i][0].toUpperCase() + split[i].slice(1);
    }
    document.write(split.join(" "));
}
// 12. Write a program that converts the variable num to string.
// var num = 35.36 ;
// Remove the dot to display “3536” 
function num() {
    var num = 35.36;
    var str = num.toString();
    var res = str.replace('.', '');
    document.write("Number "+ num +"<br> Result "+ res);
}
// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
function validUsername() {
    var userName = prompt("Enter username");
    var len = userName.split("");
    for(i = 0; i < len.length; i++) {
        if( (userName.slice(i,i+1) == "@") || (userName.slice(i,i+1) == ".") || (userName.slice(i,i+1) == "!") ) {
            document.write("Invalid");
            break;
        }
    }

}
// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
function searching() {
    var A = ['cake', 'apple pie', 'cookie', 'patties'];
    var ip = prompt("Enter product");
    var res = A.indexOf(ip);
    if (res >= 0) {
        document.write(ip +" is available at index "+ res);
    } else {
        document.write("Sorry! "+ ip +" is not available in our bakery");
    }
}
// 15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
function password() {
    var pass = prompt("Enter password");
    var pattern = /[A-Z, a-z, 0-9]/g;
    var res = pass.match(pattern);
    if (pass.length > 6) {
        var split = pass.split("");
        if (split[0] == /[0-9]/g) {
            if ( (pass.match(/[0-9]/g)) && (pass.match(/[a-z]/g)) && (pass.match(/[A-Z]/g)) ) {
                document.write("PAssword is okay");
            } else {
                document.write("Passwrord must contains capital and small letters and numbers");
            }
        } else {
            document.write("Passwrord can't begin with a number");
        }
    } else {
        document.write("Password must be bigger than 6 char");
    }
}
// 16. Write a program to convert the following string to an
// array using string split method.
function stringConversion() {
    var str = "University of Karachi";
    var res = str.split('');
    for (let index = 0; index < res.length; index++) {
        document.write(res[index] +"<br>");
    }
}
// 17. Write a program to display the last character of a user input.
function lastChar() {
    var ip = prompt("Enter str");
    var res = ip.charAt((ip.length)-1);
    document.write("User inpur"+ ip +"<br> Last char "+ res);
}
// 18. You have a string “The quick brown fox jumps over the lazy dog”.
// Write a program to count number of occurrences of word “the” in given string.
function occurance() {
    var str = "The quick brown fox jumps over the lazy dog".toLowerCase();
    var count =  (str.match(/the/g)).length; 
    document.write(count);
}

// -----------------------------------------------------------------------------------------------------------
// Chapter #26-30  Math METHODS 
// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
function display() {
    var ip = parseFloat(prompt("Enter number","0"));
    var roundOff = Math.round(ip);
    var floor = Math.floor(ip);
    var ceil = Math.ceil(ip);
    document.write(ip +"<br>Round Off : "+ roundOff +"<br> Floor: "+ floor +"<br> Ceil: "+ ceil);
}
// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
function negFloating() {
    var ip = parseFloat(prompt("Enter -ve number","0"));
    var roundOff = Math.round(ip);
    var floor = Math.floor(ip);
    var ceil = Math.ceil(ip);
    document.write(ip +"<br>Round Off : "+ roundOff +"<br> Floor: "+ floor +"<br> Ceil: "+ ceil);
}
// 3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5
function absValue() {
    var ip = parseInt(prompt("Enter  number","0"));
    var absValue = Math.abs(ip);
    document.write(absValue);
}
// 4. Write a program that simulates a dice using random() method of JS Math class.
function dice() {
    var dice = Math.floor((Math.random()*6)+1);
    document.write("Random dice value "+ dice);
}
// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your browser
function coin() {
    var coin = Math.floor((Math.random()*2)+1);
    var val = (coin == 1) ? "Head" : "Tail";
    document.write("Random coin value "+ val);
}
// 6. Write a program that shows a random number between 1
// and 100 in your browser.
function random() {
    var random = Math.floor((Math.random()*100)+1);
    document.write("Random number between 1 and 100: "+ random);
}
// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
function parse() {
    var ip = parseFloat(prompt("Enter number","0"));
    document.write(ip);
}
// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.
function secretNum() {
    var ip = parseInt(prompt("Enter number",""));
    var random = ((Math.random()*10)+1);
    if(ip == random) {
        document.write("Congo! you guess it write");
    } else {
        document.write("Try again");
    }
}

// ----------------------------------------------------------------------------------------------------------------
// Chapter #31-34 DATE METHODS
// 1. Write a program that displays current date and time in your browser
function currentDateTime() {
    var date = new Date();
    document.write(date);
}
// 2. Write a program that alerts the current month in words.
// For example December.
function mounth() {
    var date = new Date();
    var str = date.toString();
    var mounth = str.slice(4,8);
    document.write(mounth);
}
// 3. Write a program that alerts the first 3 letters of the current day. 
function day() {
    var date = new Date();
    var str = date.toString();
    var day = str.slice(0,3);
    document.write(day);
}
// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.
function funDay() {
    var date = new Date();
    var str = date.toString();
    var day = str.slice(0,3);
    if ( ( day == "Sun") || ( day == "Sat" ) ) {
         document.write("It's fun day");
    } else {
        document.write("NOt a fun day");
    }
}
// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.
function daysMsg() {
    var date = new Date();
    var date = date.getDate();
    if ( date < 16 ) {
        document.write("First fifteen days of mounth");
    } else {
        document.write("Last fifteen days of mounth");
    }
}
// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 
function min() {
    var date = new Date();
    var mili=date.getTime();
    var minutes = Math.floor(mili / 60000);
	document.write("Current date : "+ date +"<br>Elapsed Miliseconds: "+ mili +"<br>Elapsed Minute: "+ minutes +"<br>");

}

// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.
function beforeAfterNoon() {
    var date = new Date();
    var hours = date.getHours();
    if ( hours < 12 ) {
        document.write("Its AM");
    } else {
        document.write("Its PM");
    }
}
// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.
function laterDate() {
    var date = new Date("December 31, 2020 01:15:00");
    document.write(date);
}
// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015
function RamazanDate() {
    var date = new Date("June 18, 2015");
    var now = new Date();
    var yr = ( (now.getFullYear() - 1) - (date.getFullYear() + 1) ) * 365;
    var mth = ( (11 - date.getMonth()) + now.getMonth() ) * 30;
    var day = ( (date.getDate() + now.getDate()));
    var totalDaysPast = yr + mth + day;
    document.write("First ramazan was on "+ totalDaysPast);
}
// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.
function sec() {
    var now = new Date();
    var start = new Date(2020,0,1);
    var dif = now.getTime() - start.getTime();
    
    var Seconds_from_T1_to_T2 = dif / 1000;
    var Seconds_Between_Dates = Math.abs(Seconds_from_T1_to_T2);
    document.write("On reference date "+ now +" <br>"+ Seconds_Between_Dates +" seconds had passed since begining of 2020");
}

// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.
function dateReset() {
    var date = new Date();
    document.write("Current date "+ date);
    var hr = date.getHours();
    date.setHours(hr-1);
    document.write("<br> 1 hour ago, it was "+ date);
}
// 12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?
function hundYearBack() {
    var date = new Date();
    var yr = date.getFullYear();
    date.setFullYear(yr-100);
    document.write("Current year is "+ yr +"<br> 100 year ago, it was "+ date);
}

// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.
function birthYear() {
    var age = prompt("Enter age");
    var date = new Date();
    var currentYear = date.getFullYear();
    var birthYear = currentYear - age;
    document.write("Your birth year is "+ birthYear);
}
// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge
function bill() {
    var date = new Date();
    var name = prompt("Enter name");
    var month = date.getMonth();
    var units = parseInt(prompt("Enter units"));
    var charges = 16;
    var net = units * charges;
    var gross = net + 200;
    document.write("Customer Name: "+ name);
    document.write("<br>Month: "+ month);
    document.write("<br>Number of Units: "+ units);
    document.write("<br>Charges per Unit: "+ charges);
    document.write("<br>Net Amount Payable (within Due Date): "+ net);
    document.write("<br>Gross Amount Payable (after Due Date): "+ gross);
}

// ------------------------------------------------------------------------------------------------
// Chapter #36-40 FUNCTION
// 1. Write a function that displays current date & time.
function currentDate() {
    var date = new Date();
    document.write(date);
}
// 2. Write a function that takes first & last name and then it
// greets the user using his full name.
function greet() {
    var fName = prompt("Enter your name", "");
    var lName = prompt("Enter your last name");
    var fullNmae = fName + lName;
    alert("Welcome"+ fullNmae);
}
// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.
function add() {
    var n1 = parseInt(prompt("Enter number"));
    var n2 = parseInt(prompt("Enter 2nd num"));
    var add = n1 + n2;
    return add;
}
// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.
function calculator(num1, num2, op) {
    var res;
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

// 5. Write a function that squares its argument.
function square(ip) {
    var sq = Math.pow(ip,2);
    document.write(sq);
}
// 6. Write a function that computes factorial of a number.
function factorial() {
    var ip = parseInt(prompt("Enter number"));
    var f = 1;
    for (let i = 1; i <= ip; i++){
        f = f * i;
    }
    document.write(f);
}
// 7. Write a function that take start and end number as inputs
// & display counting in your browser.
function counting() {
    var start = parseInt(prompt("Enter number"));
    var end = parseInt(prompt("Enter end number"));
    for (let index = start; index < end; index++) {
        document.write(index +"<br>");
    }
}
// 8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
function calculateHypotenuse() {
    var b = parseInt(prompt("Enter base"));
    var p = parseInt(prompt("Enter per"));
    var baseSq = calculateSquare(b);
    var perSq = calculateSquare(b);
    var hypo = Math.sqrt(baseSq + perSq);
    document.write(hypo);
}
function calculateSquare(val) {
    sq = Math.pow(val,2);
    return sq;
}
// 9. Write a function that calculates the area of a rectangle.
//  A = width * height
function area(w=4, h=2) {
    var area = w * h;
    document.write(area);
}
// 10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?
function palindrome(input) {
    var split = input.split("");
    for (let index = 0; index < Math.ceil(split.length / 2); index++) {
        if(split[index] != split[split.length-index-1]) {
            document.write("Not a palindrome");
            break;
        } 
    }
}

// 11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'
function titlecase(str) {
    var lowerCase = str.toLowerCase();
    var split = lowerCase.split(" ");
    for(i = 0; i < split.length; i++) {
        split[i] = split[i][0].toUpperCase() + split[i].slice(1);
    }
    document.write(split.join(" "));
}
// 12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'
function longestWord(input) {
    var split = input.split(" ");
    for (let i = 0; i < split.length; i++) {
        var long = split[0];
        if (long.length < split[i].length) {
            long = split[i];
        }
    }
    document.write("Longes word is : "+ long);
}
// 13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of 
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'
function occurance(str, letter) {
    var count = 0;
    var strsplit = str.split("");
    for(var i = 0; i < strsplit.length; i++) {
        if(strsplit[i] == letter) {
            count++;
        }
    }
    document.write("Occurance of "+ letter +" in "+ str +" is "+ count +" times");
}
// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// Create a function called calcArea:
// Circumference of circle = 2πr
// Area of circle = πr2
function calcCircumference(rad) {
    var circumference = 2 * 3.142 * rad;
    document.write("Circumference of circle is "+ circumference);
}
function calcArea(rad) {
    var area = 3.142 * Math.pow(rad,2);
    document.write("Area of a circle is "+ area);
}