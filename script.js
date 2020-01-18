// var randomWord = "kaart";
var randomWord = words[Math.floor(Math.random() * words.length)];
    console.log(randomWord);

var beurt = 0;

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


for (var i = 0; i < 5; i++) {
    var row = document.createElement("div");
        // gameDiv.appendChild(row);
        row.setAttribute("class", "row");
        // row.setAttribute("id", `row_${i+1}`)

    for (var j = 0; j < 5; j++) {
        var letterBox = document.createElement("p");
            letterBox.setAttribute("class", "default");
            letterBox.setAttribute("id", `row_${i}-letter_${j}`);
            
            row.appendChild(letterBox);
    }
    gameDiv.appendChild(row);
}

var input = document.createElement("input");
    input.setAttribute("id", "input");
    input.setAttribute("type", "text");
    input.setAttribute("placeholder", "typ hier je antwoord");
    gameContainer.appendChild(input);

var button = document.createElement("button");
    button.setAttribute("onclick", "check()");
    button.innerText = "spelen";
    gameContainer.appendChild(button);


var wordArray = randomWord.split("");
    document.getElementById("row_0-letter_0").innerText = wordArray[0];


function check() {
    var wordArrayCopy = wordArray.slice(0);
    var guess = input.value;
    var guessArray = guess.split("");
    
    // "The forEach() method calls a function once for each element in an array, in order." - W3Schools
    guessArray.forEach(function(value, index) {
        document.getElementById(`row_${beurt}-letter_${index}`).innerText = value;
        if (value == wordArrayCopy[index]) {
            document.getElementById(`row_${beurt}-letter_${index}`).style.backgroundColor = "green";
            document.getElementById(`row_${beurt}-letter_${index}`).innerText = value;
            guessArray[index] = wordArrayCopy[index] = null;
        }
    })

    guessArray.forEach(function(value, index) {
        if (value != null) {
            if (wordArrayCopy.indexOf(value) > -1) {
                document.getElementById(`row_${beurt}-letter_${index}`).style.backgroundColor = "yellow";
                document.getElementById(`row_${beurt}-letter_${index}`).innerText = value;
                wordArrayCopy[wordArrayCopy.indexOf(value)] = guessArray[index] = null;
                guessArray[index] = null;
            }
        }
    })

    console.log(wordArrayCopy);
    console.log(guessArray);
    beurt++;
}

