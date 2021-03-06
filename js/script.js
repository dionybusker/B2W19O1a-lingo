var randomWord = words[Math.floor(Math.random() * words.length)];

var beurt = 0;

var body = document.getElementsByTagName("body")[0];

var gameContainer = document.createElement("div");
    gameContainer.setAttribute("id", "game-container");
    gameContainer.style.width = "485px";
    body.appendChild(gameContainer);

var username = prompt("Vul je naam in");
var devMode = document.createElement("p");
    devMode.style.textAlign = "right";
    devMode.innerText = `speler: ${username}`;
    gameContainer.appendChild(devMode);

    if (username == "!diony") {
        console.log(randomWord);
    }

var h1 = document.createElement("h1");
    h1.innerText = "Lingo";
    gameContainer.appendChild(h1);

var p = document.createElement("p");
    p.innerText = "Groene vierkant: letter staat op de juiste plek. \n Gele cirkel: letter zit in het woord maar staat op de verkeerde plek.";
    gameContainer.appendChild(p);

var gameDiv = document.createElement("div");
    gameDiv.setAttribute("id", "game");
    gameContainer.appendChild(gameDiv);


for (var i = 0; i < 6; i++) {
    var row = document.createElement("div");
        row.setAttribute("id", `row_${i}`);
        row.setAttribute("class", "all-rows");

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
    button.setAttribute("onclick", "count(beurt)");
    button.innerText = "Spelen";
    gameContainer.appendChild(button);


var wordArray = randomWord.split("");
    document.getElementById("row_0-letter_0").innerText = wordArray[0];


function count(beurt) {
    if (beurt >= 5) {
        for (var i = 0; i < 5; i++) {
            var answer = document.getElementById(`row_5-letter_${i}`);
                answer.style.visibility = "visible";
                answer.style.backgroundColor = "#ff8000";
                answer.style.border = "5px solid black";
        }
        wordArray.forEach(function(value, index) {
            document.getElementById(`row_${beurt}-letter_${index}`).innerText = value;
        })
        alert("Helaas, je hebt het woord niet geraden!");
        gameContainer.removeChild(input);
        button.innerText = "Opnieuw spelen?";
        button.setAttribute("onclick", "reset()");
    } else {
        check();
    }
}

var correct = 0;

function check() {
    var wordArrayCopy = wordArray.slice(0);
    var guess = input.value;
    var guessArray = guess.split("");
    correct = 0;

    // "The forEach() method calls a function once for each element in an array, in order." - W3Schools
    guessArray.forEach(function(value, index) {
        document.getElementById(`row_${beurt}-letter_${index}`).innerText = value;
        if (value == wordArrayCopy[index]) {
            document.getElementById(`row_${beurt}-letter_${index}`).style.backgroundColor = "green";

            correct++;
            
            document.getElementById(`row_${beurt}-letter_${index}`).innerText = value;
            guessArray[index] = wordArrayCopy[index] = null;

        }
    })

    guessArray.forEach(function(value, index) {
        if (value != null) {
            if (wordArrayCopy.indexOf(value) > -1) {
                document.getElementById(`row_${beurt}-letter_${index}`).style.backgroundColor = "yellow";
                document.getElementById(`row_${beurt}-letter_${index}`).style.borderRadius = "50%";
                document.getElementById(`row_${beurt}-letter_${index}`).innerText = value;
                wordArrayCopy[wordArrayCopy.indexOf(value)] = guessArray[index] = null;
                guessArray[index] = null;
            }
        }
    })

    if (username === "!diony") {
        console.log(wordArrayCopy);
        console.log(guessArray);    
    }

    document.getElementById("input").value = "";
    beurt++;

    if (correct == 5) {
        alert("Goed gedaan, je hebt het woord geraden!");
        gameContainer.removeChild(input);
        button.innerText = "Opnieuw spelen?";
        button.setAttribute("onclick", "reset()");
    }

}

function reset() {
    location.reload();
}
