var chalk = require('chalk');
var readlineSync = require("readline-sync");


var userName = readlineSync.question(chalk.redBright.bgGreen("What is your name? \n"));
console.log(chalk.black.bgCyan.bold("welcome "+userName+" , Play this Quiz if and only if you have watched Bahubali Movie? "));
console.log("");
var score = 0;
console.log(chalk.redBright.bgYellowBright("Current Score : "+score));
console.log("");
function play(question,answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log(chalk.red.bgGreen("Yes!! you are Correct.."));
    console.log("");
    score = score + 1;
  }
  else{
    console.log(chalk.black.bgRed("Oops you are Worng!!!"));
    console.log("");
    score = score - 1;
  }

}
var questions =[
  {
    question:chalk.red.bgWhiteBright('1Q) How many National Film Awards did Baahubali: The Beginning win?\n a) 3 \n b) 2 \n c) 4 \n')+chalk.blackBright.bgGreenBright("Ans:"),
    answer: "b",
  },
  {
    question: chalk.red.bgWhiteBright(" 2Q) In Baahubali: The Beginning, after Sanga adopts the baby when he is found floating in the river, what does she name him? \n a) shiva \n b) shankar \n c) shivudu \n ")+chalk.blackBright.bgGreenBright("Ans:"),
    answer: "c",
  },
  {
    question: chalk.red.bgWhiteBright(" 3Q) Which fictional ancient Indian kingdom is the Baahubali movie series set in? \n a) Mahishmathi \n b) Maitrakas \n c) Kalabhras \n")+chalk.blackBright.bgGreenBright("Ans:"),
    answer: "a",
  },
  {
    question: chalk.red.bgWhiteBright( " 4Q) _____ ne ____ ko kyu mara? \n a) Bhallaladeva, Baahubali \n b) Kattappa, Baahubali \n c) Baahubali, Kattappa \n")+chalk.blackBright.bgGreenBright("Ans:"),
    answer: "b" ,
  },
]
for(var i = 0; i<questions.length;i++){
  currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer);
  
}
console.log("Total Score : "+score);
if(score >= 3){
  console.log(chalk.blueBright("send me the screenshot i will update the leaderboard...!!"));
}
else{
  console.log(chalk.red("Betterluck next time "+userName));
}

var leaderBoard = [
  {
    name: "Uday Kumar",
    marks: "4",
  },
  {
    name: "Mohan Raj",
    marks: "3",
  },
]
console.log(chalk.redBright("-------Leader Board--------"));
for(var i = 0; i < leaderBoard.length;i++){
  console.log(chalk.cyanBright(leaderBoard[i].name + ":", leaderBoard[i].marks));
}