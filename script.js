var gameContainer = document.getElementById("game");
    gameContainer.style.width = "485px";

for (rows = 0; rows < 5; rows++) {
    var div = document.createElement("div");
        gameContainer.appendChild(div);
        div.setAttribute("class", `row_${rows+1}`);

    for (i = 0; i < 5; i++) {
        var p = document.createElement("p");
            // p.innerText = i + 1;
            p.style.border = "1px solid black";
            p.style.width = "75px";
            p.style.height = "75px";
            p.style.margin = "10px";
            p.style.fontSize = "50px";
            p.style.display = "inline-block";
            p.style.textAlign = "center";

            p.setAttribute("class", "default");
            p.setAttribute("id", `letter_${i + 1}`)
            
            div.appendChild(p);
    }
}

// var input = document.getElementById("input");
var button = document.getElementById("button");
    button.setAttribute("onclick", "check()");

var randomWord = "kaart";
// var randomWord = words[Math.floor(Math.random() * words.length)];
    console.log(randomWord);

// var word = document.getElementsByClassName(`row_${i}`).value;


// function checkInput(event) {
//     var letters = event.value.split("");
//         console.log(letters);
// }

var firstLetter = document.getElementById(`letter_${1}`);
    firstLetter.innerText = randomWord[0];
    // firstLetter.toUpperCase();

function check() {

    var guess = document.getElementById("input").value;

    var wordArray = randomWord.split("");
    var guessArray = guess.split("");
    
    for (var i = 0; i < guessArray.length; i++) {
        if (guessArray[i] == wordArray[i]) {
            var position = document.getElementById(`letter_${i + 1}`);
                position.style.backgroundColor = "green";
                position.innerText = guessArray[i];

            wordArray[i] = null;
            guessArray[i] = null;
        }
    }

    for (var i = 0; i < guessArray.length; i++) {
        if (guessArray[i] != null) {
            if (wordArray.indexOf(guessArray[i]) != -1) {
                var position = document.getElementById(`letter_${i + 1}`);
                    position.style.backgroundColor = "yellow";
                    position.innerText = guessArray[i];

                var pos = wordArray.indexOf(guessArray[i]);
                guessArray[i] = null;
                wordArray[pos] = null;
            }

            wordArray[i] = null;
            guessArray[i] = null;


        }
        // var nextRow = document.getElementsByClassName(`row_${i}`);
        //     nextRow = nextRow + 1;
    }

    console.log(wordArray);
    console.log(guessArray);
}

