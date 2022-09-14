var score=0;
var readlineSync = require("readline-sync");
var userName = readlineSync.question("what is your Name ? ");
console.log("Welcome " + userName + ". I want to know how much you know about Marvel Trivia, so you must respond. \n")

console.log("According to our rule, if you respond correctly, you receive one point, and if you respond incorrectly, your score is reduced by one point.. Good luck")
// console.log(userName)

var questions = [
  {
    // question :1
    question: "What type of doctor is Doctor Strange?",
    answer: "neurosurgeon"
  },
  {
     // question :2
    question: " Who is Tony Stark’s father?",
    answer: "Howard Stark"
  },
  {
     // question :3
    question: "How many Infinity Stones are there?",
    answer: "Six"
  },
  {
     // question :4
    question: "Where is Captain America from?",
    answer: "Brooklyn"
  },
  {
     // question :5
    question: "Who was able to pick up Thor’s hammer in Endgame?",
    answer: "Captain America"
  },
  {
     // question :6
    question: "Who was responsible for King T'Chaka's death?",
    answer: "Zemo"
  },
  {
     // question :7
    question: "Wanda and her brother Pietro are from where?",
    answer: "Sokovia"
  },
  {
     // question :8
    question: "On what planet was the Soul Stone in Infinity War?",
    answer: "Vormir"
  },
  {
     // question :9
    question: "Which movie kicked off the Marvel Cinematic Universe?",
    answer: "Iron Man"
  },
  {
     // question :10
    question: "Who rescued Tony Stark and Nebula from space?",
    answer: "Captain Marvel"
  }
]

function play(question, answer ,questionNumber) {
  console.log("---------------------------------------------------")
  // console.log(questions[i].option)
  console.log("Question Number: "+questionNumber)
  var userAnswer = readlineSync.question(question);

  if (userAnswer.trim().toUpperCase() === answer.toUpperCase()) {
    console.log("Your answer is right");
    score += 1;

  }
  else {
    console.log("You answer is wrong");
    score--;
  }
  console.log("current score :", score);
}

for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer ,i+1);
}
console.log("")
console.log("Your final score is " + score)

var highScore = [
  {
    name: 'first unknown',
    score: 9
  },
  {
    name: "second unknown",
    score: 8
  },
  {
    name: "third unknown",
    score: 7
  }
]

for(let i=0;i<2;i++){
  if(highScore[i].score < score){
    
    highScore[i+1].score=highScore[i].score;
    highScore[i+1].name=highScore[i].name;
    
    highScore[i].name = userName;
    highScore[i].score = score;

    break;
  }
}
console.log("\n")
for(var j=0;j<3;j++){
  console.log(j+1 + ":" + highScore[j].name)
}
