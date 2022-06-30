// PROGRAM NAME: Quiz
// DESCRIPTION: Quiz on car engines
// VERSION 1
// CREATION DATE: 4 November
// AUTHOR: Leo Buttar

var loop = "y";

while (loop == "y") {
 
// Welcome Component

alert("Welcome to the JDM legends quiz");
var greeting = ["Hello ", "Hi ", "Hey "];
var name = prompt ("What is your name?");
var ran = Math.floor(Math.random() * 3);
alert (greeting [ran] + name + " are you ready to do JDM legends quiz");

var score = 0;

// Question Component

var q1 = prompt ("Question 1: \n How many races did the r32 GTR win in the Japanese Touring Car Championship? \n a: 29 \n b: 30 \n c: 31 \n d: 32");

if (q1 == "a") {
  alert ("correct")
  score = score + 1
} else {
  alert ("wrong, the correct answer was a, 29")
}

var q2 = prompt ("Question 2: \n What car did the 2JZ-GTE come in? \n a: Honda NSX \n b: Nissan Silvia \n c: Toyota Supra \n d: Mazda RX-7 ");

if (q2 == "c") {
  alert ("correct")
  score = score + 1
} else {
  alert ("wrong, the correct answer was c, Toyota Supra")
}

var q3 = prompt ("Question 3: \n What motor powered the Mazda RX-7? \n a: LS V8 \n b: 2 Rotor \n c: RB26 \n d: SR20");


if (q3 == "b") {
  alert ("correct")
  score = score + 1
} else {

  alert ("wrong, the correct answer was b, 2 Rotor")
}

var q4 = prompt ("Question 4: \n What car did the RB26DET come in? \n a: Nissan Silvia S15 \n b: Nissan GTR \n c: Nissan 350Z \n d: Nissan 240SX");

if (q4 == "b") {
   alert ("correct")
  score = score + 1
} else {
  alert ("wrong, the correct answer was b, Nissan GTR R34")
}

var q5 = prompt ("Question 5: \n Who tested the Honda NSX? \n a: Ayrton Senna (1988, 1990 and 1991 Formula 1 champ for Mclaren) \n b: England \n c: New Zealand \n d: America");

if (q5 == "a") {
  alert ("correct")
  score = score + 1
} else {
  alert ("wrong, the correct answer was a, Australia")
}

// Score Component

alert (name + " your score was " + score + " out of 5");

if (score == "5") {
  alert ("very good job you clearly liked my website")
}

if (score == "4") {
  alert ("very good effort only 1 wrong try get 100% next time")
}

if (score == "3") {
  alert ("over half right good try")
}

if (score == "2") {
  alert ("nearly half right need to learn some more")
}

if (score == "1") {
  alert ("only 1 right go back and learn some more")
}

if (score == "0") {
  alert ("why did you even try?")
}


// Farewell Component

var random = Math.floor(Math.random() * 5);

var farewell = [" see you later ", " goodbye ", " catch you later ", " bye bye ", " au revoir "];
alert (farewell [random] + name + " hope you come back");

var loop = prompt("do you want to do the quiz again? type y yes n no");
}