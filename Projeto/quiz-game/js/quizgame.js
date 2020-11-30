//declare all variables
var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var quizQuestion = document.getElementById("quizQuestion");
var quizImg = document.getElementById("quizImg");
var optionA = document.getElementById("choiceA");
var optionB = document.getElementById("choiceB");
var optionC = document.getElementById("choiceC");
var optionD = document.getElementById("choiceD");
var scoreBlock = document.getElementById("scoreBlock");
var scoreMessage = document.getElementById("scoreMessage");
var quizAgain = document.getElementById("quizAgain");
var choices = document.getElementById("choices");
var choiceResponse = document.getElementById("choiceResponse");
var score = 0;

//questões funcionam para que nossa função getQuestion mais tarde possa obter o valor correto do array

let questions = [{
    question: "De que país é esse ponto turístico?",
    imgSrc: "mundo/turismo/frança.jpg",
    choiceA: "Nova Zelandia",
    choiceB: "Índia",
    choiceC: "França",
    choiceD: "Alemanha",
    correctAnswer: "C"
}, {
    question: "De que país é esse ponto turístico?",
    imgSrc: "mundo/turismo/newyork.jpg",
    choiceA: "Estados Unidos",
    choiceB: "Turquia",
    choiceC: "Mexico",
    choiceD: "Brasil",
    correctAnswer: "A"
}, {
    question: "De que país é esse ponto turístico?",
    imgSrc: "mundo/turismo/italia.jpg",
    choiceA: "Panamá",
    choiceB: "Itália",
    choiceC: "Japão",
    choiceD: "África",
    correctAnswer: "B"
}, {
    question: "De que país é esse ponto turístico?",
    imgSrc: "mundo/turismo/alemanha.jpg",
    choiceA: "Alemanha",
    choiceB: "França",
    choiceC: "Inglaterra",
    choiceD: "Rússia",
    correctAnswer: "A"
}, {
    question: "De que país é esse ponto turístico?",
    imgSrc: "mundo/turismo/brasilcataratas.jpg",
    choiceA: "Nicarágua",
    choiceB: "Chile",
    choiceC: "Austrália",
    choiceD: "Brasil",
    correctAnswer: "D"
}, {
    question: "De que país é esse ponto turístico?",
    imgSrc: "mundo/turismo/china.jpg",
    choiceA: "Peru",
    choiceB: "Nigéria",
    choiceC: "China",
    choiceD: "Japão",
    correctAnswer: "C"
}, {
    question: "De que país é esse ponto turístico?",
    imgSrc: "mundo/turismo/myanmar.jpg",
    choiceA: "Nova Zelândia",
    choiceB: "Myanmar",
    choiceC: "China",
    choiceD: "Índia",
    correctAnswer: "B"
}, {
    question: "De que país é esse ponto turístico?",
    imgSrc: "mundo/turismo/india.jpg",
    choiceA: "Colômbia",
    choiceB: "Cazaquistão",
    choiceC: "Israel",
    choiceD: "India",
    correctAnswer: "D"
}, {
    question: "De que país é esse ponto turístico?",
    imgSrc: "mundo/turismo/cristo.jpg",
    choiceA: "Brasil",
    choiceB: "Portugal",
    choiceC: "Espanha",
    choiceD: "Peru",
    correctAnswer: "A"
}, {
    question: "De que país é esse ponto turístico?",
    imgSrc: "mundo/turismo/colombia.jpg",
    choiceA: "Itália",
    choiceB: "Colômbia",
    choiceC: "Uruguai",
    choiceD: "Brasil",
    correctAnswer: "B"
}, ];


var questionIndex = 0;


// getQuestion function

function getQuestion() {

    choiceResponse.style.display = "none";
    let q = questions[questionIndex];
    quizQuestion.innerHTML = "<p>Question " +(questionIndex+1) + ": " + q.question + "</p>";
    quizImg.innerHTML = "<img src=" + q.imgSrc + ">";
    optionA.innerHTML = q.choiceA;
    optionB.innerHTML = q.choiceB;
    optionC.innerHTML = q.choiceC;
    optionD.innerHTML = q.choiceD;
    choices.style.display = "block";
}


// start quiz

function beginQuiz() {
    start.style.display ="none";
    getQuestion();
    quiz.style.display = "block";
}

// Visualizar score

function showScore() {
    quiz.style.display = "none";
    scoreBlock.style.display = "block";
    scoreBlock.innerHTML = "<p> Você marcou " + score + " de 10!</p>";

    if (score < 4) {
        scoreMessage.innerHTML = "<p>Não tão bom! É hora de se organizar para mais viagens.</p>";
    }
    else if (score < 8) {
        scoreMessage.innerHTML = "<p>Muito bom! Mas ainda há espaço para melhorias.</p>"
    }
    else {
        scoreMessage.innerHTML = "<p>Ótimo trabalho! Você realmente gosta de viajar!</p>"
    }
    scoreMessage.style.display = "block";
    quizAgain.style.display = "block";
}


//function que checa se a resposta está correta

function check(answer) {
    if (questionIndex < questions.length - 1) {
        if (answer == questions[questionIndex].correctAnswer) {
            score++;
            questionIndex++;
            choices.style.display = "none";
            choiceResponse.innerHTML= "<p>Correto!</p>"
            choiceResponse.style.display = "block";
            setTimeout(getQuestion,2000);
        }
        else {
            questionIndex++;
            choices.style.display = "none";
            choiceResponse.innerHTML= "<p>Incorreto!</p>"
            choiceResponse.style.display = "block";
            setTimeout(getQuestion,2000);
        }
    }
    else {
        if (answer == questions[questionIndex].correctAnswer) {
            score++;
            choices.style.display = "none";
            choiceResponse.innerHTML= "<p>Correto!</p>"
            choiceResponse.style.display = "block";
            setTimeout(showScore,2000);
        }
        else {
            choices.style.display = "none";
            choiceResponse.innerHTML= "<p>Inorreto!</p>"
            choiceResponse.style.display = "block";
            setTimeout(showScore,2000);
        }
    }
}

function restartQuiz() {
    start.style.display = "block";
    scoreBlock.style.display = "none";
    scoreMessage.style.display = "none";
    quizAgain.style.display = "none";
    score = 0;
    questionIndex = 0;
}
