
const Green = document.getElementById('green')
const Red = document.getElementById('red')
const Blue = document.getElementById('blue')
const Yellow = document.getElementById('yellow')
var Heading = document.getElementById('level-title')
randomArray = [];
inputArray = [];
var counter = 1


// 1.start random function 
function random() {
    var rando = Math.floor(Math.random() * 4);
    return rando;
}
// 1.end stop random function 


// 2.start blink function
var ss = 0
var count = 0
// 2.1 itirates over array to blink
function blinkall() {
    for (var i = 0; i < randomArray.length; i++) {
        blink1(randomArray[i], i)
        count++
    }
}
// 2.2. takes one random value and blinks it
function blink1(randomNumber, i) {
    
    if (randomNumber === 0) {
        anime(Green, i)
    }
    else if (randomNumber === 1) {
        anime(Red, i)
    }
    else if (randomNumber === 2) {
        anime(Blue, i)
    }
    else if (randomNumber === 3) {
        anime(Yellow)
    }
}
// 2.3 blink 
function anime(ele) {
    console.log(ele);
    setTimeout(() => {
        ele.classList.add('fade')
        convertStringToInt(ele.classList[1])
        setTimeout(() => {
            ele.classList.remove('fade')
        },200);
    }, ss);
    ss = 800 * (count + 1)
}
// 2.end stop blink function 


// 3.start append input
// add event listner and append input 

function convertStringToInt(color) {
    var audio = new Audio()
    if (color === "green") {
        audio.src = "sounds/green.mp3"
        audio.play()
        return 0
    } else if (color === "red") {
        audio.src = "sounds/red.mp3"
        audio.play()
        return 1
    } else if (color === "blue") {
        audio.src = "sounds/blue.mp3"
        audio.play()
        return 2
    } else if (color === "yellow") {
        audio.src = "sounds/yellow.mp3"
        audio.play()
        return 3
    }
}
// 3.stop 


// 4.Start Checking
function checker(array1, array2) {
    if (array1.length >= array2.length) {

        for (var i = 0; i < array2.length; i++) {
            if (array1[i] === array2[i]) {
            } else {
                return false
            }
        }
        return true
    } else {
        return false
    }
}

// on keyboard press or click
function mainGame() {

    ss = 500
    count = 0
    // 1
    var randomNo = random();
    randomArray.push(randomNo);
    // 2
    blinkall();
}

var eventHandler = connect
document.addEventListener('keypress', eventHandler);

// status of game
var statuss = "false";

// button and keydown for starting the game

function connect() {
    if (statuss === "true") {
        Heading.innerHTML = `Press A Key to Start`
        gameReset()
    } else {
        statuss = "true"
        Heading.innerHTML = `Level ${counter}`
        document.getElementsByClassName('tutorial-btn')[0].innerHTML = "Stop"
        // removes keybaord event lisner
        document.removeEventListener('keypress', eventHandler);
        mainGame()
        // adds mouse event listner
        document.getElementsByClassName('container')[0].addEventListener('click', handler, false);
    }


}
var handler = function (event) {
    mainEvent(event)
    event.stopPropagation();
}
// adds button->pressed | converts color-string->to color-number | pushes(colornumber->inputArray)|checks for errors | calls gameProcced if all good
function mainEvent(event) {
    if (event.path.length === 7) {
        event.path[0].classList.add('pressed')
        setTimeout(() => {
            event.path[0].classList.remove('pressed')
        }, 150);
        inputArray.push(convertStringToInt(event.path[0].classList[1]))
        var status = checker(randomArray, inputArray)
        if (!status) {
            gameOver()
        }
        if (status === true && inputArray.length === randomArray.length) {
            gameProcced()
        }
    }
}

// proceeds game to next level(clears input Array and increse level and blink over random )
function gameProcced() {
    counter++
    Heading.innerHTML = `Level ${counter}`
    inputArray = []
    mainGame()
}
// puts game back to inital status
// includes-> 1.styles{
//     unhides game over | plays wrong audio | changes background|puts inner heading to empty| removes all effects at 150ms ,adds Press a key to Start |
//             }
//  2. adds keyboard event handler | 3. triggers gameReset()

function gameOver() {
    document.getElementById('go').classList.remove('hide')
    var audio1 = new Audio('sounds/wrong.mp3')
    audio1.play
    document.body.classList.add('Red')
    Heading.innerHTML = ``
    setTimeout(() => {
        Heading.innerHTML = `Press A Key to Start`
        document.body.classList.remove('Red')
        document.getElementById('go').classList.add('hide')
    }, 200);
    document.addEventListener('keypress', eventHandler);
    gameReset()
}
// adds Start to button-text | resets lvl counter | resets inputArray | randomArray sets Game status=false | removes mouse/touch event handler |adds again the keydown handler
function gameReset() {
    document.getElementsByClassName('tutorial-btn')[0].innerHTML = "Start"
    counter = 1
    inputArray = []
    randomArray = []
    statuss = "false"
    document.getElementsByClassName('container')[0].removeEventListener('click', handler, false);
    document.addEventListener('keypress', eventHandler);
}
