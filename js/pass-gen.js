var array = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function passGeneraton(){
    var pass = "";
    var length = +document.getElementById("passLength").value;
    for(var i = 0; i < length; i++){
        var credit = Math.round(Math.random() * (array.length - 1));
        pass = pass + array[credit];
    }
    document.getElementById("result").value = pass;
}