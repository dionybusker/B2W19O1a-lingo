var gameContainer = document.getElementById("game");
    gameContainer.style.width = "485px";

for (rows = 0; rows < 5; rows++) {
    var div = document.createElement("div");
        gameContainer.appendChild(div);
        div.setAttribute("class", `row_${rows}`);

    for (i = 0; i < 5; i++) {
        var p = document.createElement("p");
            // p.innerText = i + 1;
            p.style.border = "1px solid black";
            p.style.width = "75px";
            p.style.height = "50px";
            p.style.margin = "10px";
            p.style.fontSize = "50px";
            p.style.display = "inline-block";
            p.style.textAlign = "center";

            p.setAttribute("class", "default");
            
            div.appendChild(p);
    }
}

var input = document.getElementById("input");
var button = document.getElementById("button");
    button.setAttribute("onclick", "checkInput(input)");

function checkInput(event) {
    var letters = event.value.split("");
    console.log(letters);
}

