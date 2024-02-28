let btn = document.getElementById('starting-btn');
let startTime;
btn.addEventListener('click', () =>{
    startTime = new Date();
    let starting = document.getElementById('starting');
    let quiz = document.getElementById('quiz')
    let header = document.getElementById('header')
    let progress = document.getElementById('progress')
    starting.style.display = 'none';
    quiz.style.display = 'flex';
    header.style.display = 'flex';
    progress.style.display= 'flex';
})


let currentResult = 0; 

function configureCard(cardId, quizId, quiz2Id, progBarId) {
    let card = document.getElementById(cardId);
    card.addEventListener('click', () => {
        document.getElementById(quizId).style.display = "none";
        document.getElementById(quiz2Id).style.display = "flex";
        document.getElementById(progBarId).style.backgroundColor = "rgb(1, 255, 43)";
    });
}
function configureQuizSettings(startIndex, endIndex, quizId, nextQuizId, progBarId) {
    for (let i = startIndex; i <= endIndex; i++) {
        configureCard(`card${i}`, quizId, nextQuizId, progBarId);
    }
}

function score(scrId, cardId, correct) {
    let scr = document.getElementById(scrId);
    let card = document.getElementById(cardId);

    card.addEventListener('click', () => {
        if (correct) {
            scr.innerText = parseInt(scr.innerText || 0) + 1;
        }
        let endTime = new Date();
        let timeDiff = endTime - startTime;
        let seconds = Math.floor(timeDiff / 1000);

        document.getElementById('time').innerText = parseInt(seconds) + " seconds";

    });
}

configureQuizSettings(1, 4, 'quiz', 'quiz2', 'progBar1');
configureQuizSettings(5, 8, 'quiz2', 'quiz3', 'progBar2');
configureQuizSettings(9, 12, 'quiz3', 'quiz4', 'progBar3');
configureQuizSettings(13, 16, 'quiz4', 'quiz5', 'progBar4');
configureQuizSettings(17, 20, 'quiz5', 'quiz6', 'progBar5');
configureQuizSettings(21, 24, 'quiz6', 'quiz7', 'progBar6');
configureQuizSettings(25, 28, 'quiz7', 'quiz8', 'progBar7');
configureQuizSettings(29, 32, 'quiz8', 'quiz9', 'progBar8');
configureQuizSettings(33, 36, 'quiz9', 'quiz10', 'progBar9');
configureQuizSettings(37, 40, 'quiz10', 'interface-end', 'progBar10');

score("score", "card2", true, 'quiz2');
score("score", 'card5', true, 'quiz3');
score("score", 'card11', true, 'quiz4');
score("score", 'card15', true, 'quiz5');
score("score", 'card19', true, 'quiz6');
score("score", 'card21', true, 'quiz7');
score("score", 'card25', true, 'quiz8');
score("score", 'card30', true, 'quiz9');
score("score", 'card34', true, 'quiz10');
score("score", 'card38', true, 'interface-end');


