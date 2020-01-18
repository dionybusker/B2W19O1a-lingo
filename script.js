var body = document.getElementsByTagName("body")[0];

var gameContainer = document.createElement("div");
    gameContainer.setAttribute("id", "game-container");
    gameContainer.style.width = "485px";
    body.appendChild(gameContainer);

var h1 = document.createElement("h1");
    h1.innerText = "Lingo";
    gameContainer.appendChild(h1);

var p = document.createElement("p");
    p.innerText = "Groene vierkant: letter staat op de juiste plek. \n Gele cirkel: letter zit in het woord maar staat op de verkeerde plek.";
    gameContainer.appendChild(p);

var gameDiv = document.createElement("div");
    gameDiv.setAttribute("id", "game");
    gameContainer.appendChild(gameDiv);

var input = document.createElement("input");
    input.setAttribute("id", "input");
    input.setAttribute("type", "text");
    input.setAttribute("placeholder", "typ hier je antwoord");
    gameContainer.appendChild(input);

var button = document.createElement("button");
    button.innerText = "spelen";
    button.setAttribute("onclick", "check()");
    gameContainer.appendChild(button);


for (rows = 0; rows < 5; rows++) {
    var div = document.createElement("div");
        gameDiv.appendChild(div);
        div.setAttribute("class", "rows");
        div.setAttribute("id", `row_${rows+1}`)

    for (i = 0; i < 5; i++) {
        var letterBox = document.createElement("p");
            letterBox.setAttribute("class", "default");
            letterBox.setAttribute("id", `letter_${i + 1}`);
            
            div.appendChild(letterBox);
    }
}


var randomWord = "kaart";
// var randomWord = words[Math.floor(Math.random() * words.length)];
    console.log(randomWord);
var beurt = 0;

// var word = document.getElementsByClassName(`row_${i}`).value;


// function checkInput(event) {
//     var letters = event.value.split("");
//         console.log(letters);
// }

var firstLetter = document.getElementById(`letter_${1}`);
    firstLetter.innerText = randomWord[0];

var wordArray = randomWord.split("");

function check() {
    var guess = document.getElementById("input").value;
    var wordArrayCopy = wordArray;
    var guessArray = guess.split("");
    
    // guessArray.forEach(function(value, index) {
    //     document.getElementById()
    // })

    for (var i = 0; i < guessArray.length; i++) {
        if (guessArray[i] == wordArrayCopy[i]) {
            var position = document.getElementById(`letter_${i + 1}`);
                position.style.backgroundColor = "green";
                position.innerText = guessArray[i];

            wordArray[i] = null;
            guessArray[i] = null;
        }
    }

    for (var i = 0; i < guessArray.length; i++) {
        if (guessArray[i] != null) {
            if (wordArrayCopy.indexOf(guessArray[i]) != -1) {
                var position = document.getElementById(`letter_${i + 1}`);
                    position.style.backgroundColor = "yellow";
                    position.innerText = guessArray[i];

                var pos = wordArrayCopy.indexOf(guessArray[i]);
                guessArray[i] = null;
                wordArrayCopy[pos] = null;
            }
        }
    }

    console.log(wordArrayCopy);
    console.log(guessArray);
    beurt++;
}

