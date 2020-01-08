var gameContainer = document.getElementById("game");

for (i = 1; i <= 25; i++) {
    var p = document.createElement("p");
        // p.innerText = i;
        p.style.border = "1px solid black";
        p.style.width = "75px";
        p.style.height = "50px";
        p.style.margin = "10px";
        p.style.fontSize = "50px";
        p.style.display = "inline-block";
        p.style.textAlign = "center";

        gameContainer.appendChild(p);
}

