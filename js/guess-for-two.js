var answer = parseInt(Math.random() * 100);
var playerNumber = 1;

function readInt(){
    // return +document.getElementById("userAnswer").value; -- NaN is 0
    var number = document.getElementById("userAnswer").value;
    return parseInt(number);
}

function write(text){
    document.getElementById("info").innerHTML = text;
}

function playerChange(text){
    document.getElementById("playerN").innerHTML = text;
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

    var userAnswer = readInt();
    if(userAnswer == answer){
        write("<b>Поздравляю! Вы угадали!<br>Победил игрок №" + playerNumber +"</b>");
        hide("playerN");
        hide("userAnswer");
        hide("button");
        showButton("reload-button");
    } else if(isNaN(userAnswer) || userAnswer <= 0 || userAnswer >= 100){
        write("Введите число от 0 до 100.");
    } else if(userAnswer > answer){
        write("Ваш ответ больше загаданного.");
    } else if(userAnswer < answer){
        write("Ваш ответ меньше загаданного.");
    } else {
        write("Введите число.");
    }

    if(playerNumber == 1){
        playerNumber = 2;
        playerChange("Ход второго игрока.");
    } else {
        playerNumber = 1;
        playerChange("Ход первого игрока.");
    }

    rewriteButton("Продолжить");
}