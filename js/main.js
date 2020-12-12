var titleStart = document.getElementById('title-start');
var titleGame = document.getElementById('title-game');
var game = document.getElementById('game');
var gameOver = document.getElementById('gameOver');
var msg = document.getElementById('msg');
var btnStart = document.getElementById('btn-start');
var btnBack = document.getElementById('btn-back');
var btnNext = document.getElementById('btn-next');
var btnMsg = document.getElementById('btnMsg');
var paragraph = document.getElementById("history");
var papel = document.getElementById("papel");
var pedra = document.getElementById("pedra");
var tesoura = document.getElementById("tesoura");
var imgResult = document.getElementById("img-result");
var yourChoise = document.getElementById("your-choise");
var oponenteChoise = document.getElementById("oponente-choise");
var win = document.getElementById("win");
var lose = document.getElementById("lose");
var draw = document.getElementById("draw");
var rival = document.getElementById('rival');
var soundMute = document.getElementById('soundMute');
var audio = document.querySelector('audio');

var contHistoy = 0
var countWinnerGamePlay = 0

var randownChoiseBot = ''
var round = 0
var soundOff

var userWin = 0
var userLose = 0
var userDraw = 0

rival.classList.add('img-dogo');

var method = {
    resetAll: function() {
        round = 0
        userWin = 0
        userLose = 0
        userDraw = 0
        win.innerHTML = userWin
        lose.innerHTML = userLose
        draw.innerHTML = userDraw
        oponenteChoise.classList.remove("img-papel");
        oponenteChoise.classList.remove("img-tesoura");
        oponenteChoise.classList.remove("img-pedra");
        yourChoise.classList.remove("img-papel");
        yourChoise.classList.remove("img-tesoura");
        yourChoise.classList.remove("img-pedra");
        method.removeAllRival()
        rival.classList.add("img-dogo");
    },

    removeAllRival: function() {
        rival.classList.remove("img-dogo");
        rival.classList.remove("img-fantasma");
        rival.classList.remove("img-morte");
    },

    calcPlacar: function() {
        if (userWin > userLose) {
            countWinnerGamePlay += 1
            game.style.display = 'none';
            gameOver.style.display = 'flex'
            if (countWinnerGamePlay < 3) {
                msg.innerHTML = 'Você venceu essa rodada  !! Pronto para o próximo inimigo?'
                imgResult.classList.remove("img-win");
                imgResult.classList.remove("img-lose");
                imgResult.classList.add("img-win");
                btnMsg.addEventListener('click', function(e) {
                    method.resetAll()
                    gameOver.style.display = 'none';
                    game.style.display = 'block';
                    if (countWinnerGamePlay == 1) {
                        method.removeAllRival()
                        rival.classList.add("img-fantasma");
                    } else if (countWinnerGamePlay == 2) {
                        method.removeAllRival()
                        rival.classList.add("img-morte");
                    }
                });
            } else {
                contHistoy = 0
                method.resetAll()
                countWinnerGamePlay = 0
                game.style.display = 'none';
                gameOver.style.display = 'flex'
                msg.innerHTML = 'E a humanidade está salva!! Deseja duelar novamente?'
                imgResult.classList.remove("img-win");
                imgResult.classList.remove("img-lose");
                imgResult.classList.add("img-win");
                btnMsg.addEventListener('click', function(e) {
                    gameOver.style.display = 'none';
                    game.style.display = 'none';
                    titleStart.style.display = 'block';
                });
            }
        } else {
            method.resetAll()
            countWinnerGamePlay = 0
            game.style.display = 'none';
            gameOver.style.display = 'flex'
            msg.innerHTML = 'Perdestes o nosso tributo!! Deseja duelar novamente?'
            imgResult.classList.remove("img-win");
            imgResult.classList.remove("img-lose");
            imgResult.classList.add("img-lose");
            btnMsg.addEventListener('click', function(e) {
                gameOver.style.display = 'none';
                game.style.display = 'block';
            });
        }
    }
}


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

paragraph.innerHTML = "Aos Guerreiros, Bárbaras e feiticeiros e até mesmo aos plebeus invocados por meio do Oráculo Facebook, minhas saudações!"

btnStart.addEventListener('click', function(e) {
    titleStart.style.display = 'none';
    titleGame.style.display = 'block';
    soundMute.style.display = 'block';
    audio.play();
    soundOff = false
});

soundMute.addEventListener('click', function(e) {
    if (!soundOff) {
        audio.pause();
        soundOff = true
        soundMute.src = "./assets/img/volume-mute-solid.svg";
    } else {
        audio.play();
        soundOff = !soundOff
        soundMute.src = "./assets/img/volume-up-solid.svg";
    }
});



btnBack.addEventListener('click', function(e) {
    titleGame.style.display = 'none';
    titleStart.style.display = 'block';
    soundMute.style.display = 'none';
    contHistoy = 0
    paragraph.innerHTML = "Aos Guerreiros, Bárbaras e feiticeiros e até mesmo aos plebeus invocados por meio do Oráculo Facebook, minhas saudações!"
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
    round += 1
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
    if (round == 5) {
        setTimeout(() => { method.calcPlacar() }, 500);
    }
});

pedra.addEventListener('click', function(e) {
    round += 1
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
    if (round == 5) {
        setTimeout(() => { method.calcPlacar() }, 500);
    }
});

tesoura.addEventListener('click', function(e) {
    round += 1
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
    if (round == 5) {
        setTimeout(() => { method.calcPlacar() }, 500);
    }
});

btnNext.addEventListener('click', function(e) {
    contHistoy += 1
    switch (contHistoy) {
        case 1:
            paragraph.innerHTML = "Por meio desta mensagem venho pedir vossa ajuda: o desafio foi lançado!"
            break;
        case 2:
            paragraph.innerHTML = "O reino dos monstros enviou os 3 melhores guerreiros deles para duelarem contra os nossos melhores guerreiros!!";
            break;
        case 3:
            paragraph.innerHTML = "Serão 5 rodadas cada no torneio mortal de Jokenpôh! O vencedor levará todo o tributo do reino perdedor"
            break;
        case 4:
            titleGame.style.display = 'none';
            game.style.display = 'block';
            break;
        default:
            console.log('Sem texto.');
    }

});