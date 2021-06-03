var answer = parseInt(Math.random() * 100);
var tryCount = 0;
var maxTryCount = 5;

function readInt(){
    // return +document.getElementById("userAnswer").value; -- NaN is 0
    var number = document.getElementById("userAnswer").value;
    return parseInt(number);
}

function write(text){
    document.getElementById("info").innerHTML = text;
}

function hide(id){
    document.getElementById(id).style.display = "none";
}
function showButton(id){
    document.getElementById(id).style.display = "block";
}

function rewriteButton(text){
    document.getElementById("button").innerHTML = text;
}

function guess(){
    tryCount++;
    rewriteButton("Продолжить");

    var userAnswer = readInt();
    if(userAnswer == answer){
        write("<b>Поздравляю! Вы угадали!</b>");
        hide("userAnswer");
        hide("button");
        showButton("reload-button");
    } else if(tryCount >= maxTryCount){
        write("Вы проиграли.<br>Правильный ответ: " + answer);
        hide("userAnswer");
        hide("button");
        showButton("reload-button");
    } else if(isNaN(userAnswer) || userAnswer <= 0 || userAnswer >= 100){
        write("Введите число от 0 до 100.<br>Попыток осталось: " + (maxTryCount - tryCount));
    } else if(userAnswer > answer){
        write("Ваш ответ больше загаданного.<br>Попыток осталось: " + (maxTryCount - tryCount));
    } else if(userAnswer < answer){
        write("Ваш ответ меньше загаданного.<br>Попыток осталось: " + (maxTryCount - tryCount));
    } else {
        write("Введите число.<br>Попыток осталось: " + (maxTryCount - tryCount));
    }
}