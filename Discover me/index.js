var readlineSync = require("readline-sync");
var chalk = require('chalk');

var score = 0;
console.log(chalk.green.bold.underline("Welcome to Anamika's quiz on FRIENDS") + chalk.red(" !"));
console.log(" ");
var userName = readlineSync.question(chalk.yellow("Whats your name?  "));
console.log(" ");

console.log("Welcome " + chalk.blue(userName) + " Do you know Anamika");
console.log(" ");

//play function
function play(question, answer){
  var userAnswer = readlineSync.question(question);
  console.log("");
  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log("You Answered: "+ answer);
    console.log(chalk.bgGreen("right!"));
    score = score + 1;
  }
  else{
    console.log(chalk.bgRed("wrong!"));
  }
  console.log("Current Score: ",score);
    console.log(chalk.magentaBright("--------------------------------"));
    console.log("");
}
//array of objects
var questions = [{
  question: "Q1) Where do I live? \na) Bhopal  \nb) Delhi \nc) Ranchi  \nd) Shimla\n  ",
  answer: "a"
},{
  question: "Q2) What's my College Name? \na) DU \nb) OIST \nc) IPU \nd) AU\n  ",
  answer: "b"
},{
  question: "Q3) What's my favourite Color? \na) Blue \nb) White \nc) Pink \nd) Purple\n  ",
  answer: "b"
},{
  question: "Q4) Which mode do I like? \na) Dark \nb) Light \nc) Quiet Light \nd) Solarised Light\n ",
  answer: "a"
},{
  question: "Q5)Which IDE I like most? \na) Sublime Text \nb) Visual Studio \nc) Espresso \nd) MonoDevelop\n ",
  answer: "b"
},{
  question: "Q6) My favourite subject in School days? \na) Chemistry \nb) Physics \nc) Mathematics \nd) Biology\n ",
  answer: "c"
},{
  question: "Q7) Which writer i like most? \na) M.Goldratt \nb) Premchandra \nc) Collen Hoover \nd) Rhonda Byrne\n ",
  answer: "d"
},{
  question: "Q8) Which season I Like most? \na0 Summer \nb) Winter \nc) Autumn \nd) Spring\n  ",
  answer: "b"
},{
  question: "Q9) My favorite cricketer? \na) MSDhoni \nb) Suresh Raina \nc) Virat Kohli \nd) Yuvraj Singh\n  ",
  answer: "a"
},{
   question: "Q10) What's My favorite programming language? \na) Python \nb) Java \nc) C++ \Nd) Javascript\n ",
  answer: "a" 
}];

//loop
for(var i=0; i<questions.length; i++){
  var currentQuestion =questions[i];
  play(currentQuestion.question, currentQuestion.answer); 
}

console.log(chalk.bgYellowBright("YAY! You SCORED " + score + " out of 10"));
if(score >= 5){
  console.log(chalk.bold.italic("WoW! you know me well"));
}
else{
  console.log(chalk.bold.italic("No Problem, one day you will know me well😜😁"));
}