var score = 0;

function checkAnswer(inputId, answers){
    var userAnswer = document.getElementById(inputId).value;
    userAnswer = userAnswer.toLowerCase();
    for(var i = 0; i < answers.length; i++){
        if(answers[i] == userAnswer){
            score++;
            break;
        }
    }        
}

function checkAnswers(){

    checkAnswer("userAnswer1", ["лампочка", "боксёрская", "боксерская"]);
    checkAnswer("userAnswer2", ["ель", "ёлка", "елка", "сосна"]);
    checkAnswer("userAnswer3", ["капуста", "лук"]);
    checkAnswer("userAnswer4", ["часы"]);

    alert('Загадок угадано: ' + score);
}