var titleStart = document.getElementById('title-start');
var titleGame = document.getElementById('title-game');
var game = document.getElementById('game');
var btnStart = document.getElementById('btn-start');
var btnBack = document.getElementById('btn-back');
var btnNext = document.getElementById('btn-next');
var paragraph = document.getElementById("history");
var papel = document.getElementById("papel");
var pedra = document.getElementById("pedra");
var tesoura = document.getElementById("tesoura");
var yourChoise = document.getElementById("your-choise");
var oponenteChoise = document.getElementById("oponente-choise");
var win = document.getElementById("win");
var lose = document.getElementById("lose");
var draw = document.getElementById("draw");

var contHistoy = 0

var randownChoiseBot = ''

var userWin = 0
var userLose = 0
var userDraw = 0

draw.innerHTML = userDraw

var arrayChoiseBot = [{
        'value': 1,
        'title': 'img-papel'
    },
    {
        'value': 2,
        'title': 'img-tesoura'
    },
    {
        'value': 3,
        'title': 'img-pedra'
    },
]

paragraph.innerHTML = "Olá, tem alguem ai?"

btnStart.addEventListener('click', function(e) {
    titleStart.style.display = 'none';
    titleGame.style.display = 'block';
});


btnBack.addEventListener('click', function(e) {
    titleGame.style.display = 'none';
    titleStart.style.display = 'block';
});


function removeAllSelect() {
    yourChoise.classList.remove("img-papel");
    yourChoise.classList.remove("img-tesoura");
    yourChoise.classList.remove("img-pedra");
}

function radomChoiseBot(array) {
    let radomNumb = Math.floor(Math.random() * 3)
    oponenteChoise.classList.remove("img-papel");
    oponenteChoise.classList.remove("img-tesoura");
    oponenteChoise.classList.remove("img-pedra");

    randownChoiseBot = array[radomNumb].value
    oponenteChoise.classList.add(array[radomNumb].title);
}

btnBack.addEventListener('click', function(e) {
    titleStart.style.display = 'block';
});

papel.addEventListener('click', function(e) {
    removeAllSelect()
    radomChoiseBot(arrayChoiseBot)
    if (randownChoiseBot == 1) {
        userDraw += 1
        draw.innerHTML = userDraw
    } else if (randownChoiseBot == 2) {
        userLose += 1
        lose.innerHTML = userLose
    } else if (randownChoiseBot == 3) {
        userWin += 1
        win.innerHTML = userWin
    }
    yourChoise.classList.add("img-papel");
});

pedra.addEventListener('click', function(e) {
    removeAllSelect()
    radomChoiseBot(arrayChoiseBot)
    if (randownChoiseBot == 3) {
        userDraw += 1
        draw.innerHTML = userDraw
    } else if (randownChoiseBot == 1) {
        userLose += 1
        lose.innerHTML = userLose
    } else if (randownChoiseBot == 2) {
        userWin += 1
        win.innerHTML = userWin
    }
    yourChoise.classList.add("img-pedra");
});

tesoura.addEventListener('click', function(e) {
    removeAllSelect()
    radomChoiseBot(arrayChoiseBot)
    if (randownChoiseBot == 2) {
        userDraw += 1
        draw.innerHTML = userDraw
    } else if (randownChoiseBot == 3) {
        userLose += 1
        lose.innerHTML = userLose
    } else if (randownChoiseBot == 1) {
        userWin += 1
        win.innerHTML = userWin
    }
    yourChoise.classList.add("img-tesoura");
});

btnNext.addEventListener('click', function(e) {
    contHistoy += 1
    switch (contHistoy) {
        case 1:
            paragraph.innerHTML = "Preciso da sua ajuda!"
            break;
        case 2:
            paragraph.innerHTML = "Sabe aquelas crianças ali?";
            break;
        case 3:
            paragraph.innerHTML = "Eu gostaria muito do doce delas."
            break;
        case 4:
            titleGame.style.display = 'none';
            game.style.display = 'block';
            break;
        default:
            console.log('Sem texto.');
    }


});