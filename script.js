var gameContainer = document.getElementById("game");

for (rows = 1; rows <= 5; rows++) {
    var div = document.createElement("div");
        gameContainer.appendChild(div);

    for (i = 1; i <= 25; i++) {
        var p = document.createElement("p");
            p.innerText = i;
            p.style.border = "1px solid black";
            p.style.width = "75px";
            p.style.height = "50px";
            p.style.margin = "10px";
            p.style.fontSize = "50px";
            p.style.display = "inline-block";
            p.style.textAlign = "center";

            p.setAttribute("class", "default");

            gameContainer.appendChild(p);
    }

    div.setAttribute("class", `row${rows}`)

}


