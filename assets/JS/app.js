
const shifumi = ["pierre", "papier", "ciseau"];
let random = Math.floor(Math.random() * shifumi.length);
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const equalOrWin = document.getElementById("equalityOrWin");
let counterBot = 0;
let counterPlayer = 0;




document.getElementById("pierre").addEventListener('click', function () {

    player1.style.backgroundImage = "url(/assets/img/pierre.png)";
    player1.id = "imgPierre";

    player2.style.backgroundImage = "url(/assets/img/" + shifumi[random] + ".png)"

    victoryConditions();
    counter ();

})

document.getElementById("feuille").addEventListener('click', function () {
    player1.style.backgroundImage = "url(/assets/img/papier.png)";
    player1.id = "imgPapier";

    player2.style.backgroundImage = "url(/assets/img/" + shifumi[random] + ".png)"

    victoryConditions();
    counter ();
})

document.getElementById("ciseaux").addEventListener('click', function () {
    player1.style.backgroundImage = "url(/assets/img/ciseau.png)";
    player1.id = "imgCiseaux"

    player2.style.backgroundImage = "url(/assets/img/" + shifumi[random] + ".png)"

    victoryConditions();
    counter ();
})

function victoryConditions() {
    if (player1.id === "imgPierre" && shifumi[random] === "pierre" ) {
        equalOrWin.innerHTML = "Egalité";
    }
    else if (player1.id === "imgPapier" && shifumi[random] === "papier") {
        equalOrWin.innerHTML = "Egalité";
    }

    else if (player1.id === "imgCiseaux" && shifumi[random] === "ciseau") {
        equalOrWin.innerHTML = "Egalité";
    }

    else if (player1.id === "imgCiseaux" && shifumi[random] === "pierre") {
        equalOrWin.innerHTML = "Le bot à gagné";
        counterBot++;
    }

    else if (player1.id === "imgCiseaux" && shifumi[random] === "papier") {
        equalOrWin.innerHTML = "Vous avez gagné";
        counterPlayer++;
    }

    else if (player1.id === "imgPapier" && shifumi[random] === "ciseau") {
        equalOrWin.innerHTML = "Le bot à gagné";
        counterBot++;
    }

    else if (player1.id === "imgPapier" && shifumi[random] === "pierre") {
        equalOrWin.innerHTML = "Vous avez gagné";
        counterPlayer++;
    }

    else if (player1.id === "imgPierre" && shifumi[random] === "papier") {
        equalOrWin.innerHTML = "Le bot à gagné";
        counterBot++;
    }

    else if (player1.id === "imgPierre" && shifumi[random] === "ciseau") {
        equalOrWin.innerHTML = "Vous avez gagné";
        counterPlayer++;
    }

}

function counter () {
    let bot = document.getElementById("bot");
    let player = document.getElementById("player");
    bot.innerHTML = " BOT nombre de victoire: " + counterBot;
    player.innerHTML = " Joueur nombre de victoire: " + counterPlayer;
}

document.getElementById("reset").addEventListener("click", function () {
    player1.style.backgroundImage = "none";
    player1.id = "player1";
    player2.style.backgroundImage = "none";
    equalOrWin.innerHTML = "";
})



