
const Green = document.getElementById('green')
const Red = document.getElementById('red')
const Blue = document.getElementById('blue')
const Yellow = document.getElementById('yellow')
var Heading= document.getElementById('level-title')
randomArray=[];
inputArray=[];


// 1.start random function 
function random(){
    var rando=Math.floor(Math.random()*4);
    return rando;
}
// 1.end stop random function 


// 2.start blink function
var ss = 0
var count = 0
    // 2.1 itirates over array to blink
function blinkall() {
    for(var i=0;i<randomArray.length;i++){
        blink1(randomArray[i],i)
        count++
    }  
}
    // 2.2. takes one random value and blinks it
function blink1(randomNumber,i){
    if(randomNumber===0){
        anime(Green,i)          
    }
    else if(randomNumber===1){
        anime(Red,i)        
    }
    else if(randomNumber===2){
        anime(Blue,i)
    }
    else if(randomNumber===3){
        anime(Yellow,i)
    }
 }
    // 2.3 blink 
function anime(ele) {
    setTimeout(() => {
        ele.classList.add('fade')
        setTimeout(() => {
            ele.classList.remove('fade')
        }, 200);
    }, ss);
    ss=800*(count+1)
}
// 2.end stop blink function 


// 3.start append input
    // add event listner and append input 


function convertStringToInt(color) {
    var audio = new Audio()
    if(color==="green"){
        audio.src="sounds/green.mp3"
        audio.play()
        return 0
    }else if(color==="red"){
        audio.src="sounds/red.mp3"
        audio.play()
        return 1
    }else if(color==="blue"){
        audio.src="sounds/blue.mp3"
        audio.play()
        return 2
    }else if(color==="yellow"){
        audio.src="sounds/yellow.mp3"
        audio.play()
        return 3
    }
}
// 3.stop 


// 4.Start Checking

function checker(array1,array2){

    if(array1.length>=array2.length){
  
      for(var i=0;i<array2.length;i++){
          
        
        if(array1[i]===array2[i]){
        }else{
          return false
        }
      }
      return true
  
    }else{
        return false
    }
    
  }



// on keyboard press
function  mainGame() {

    ss=500
    count=0
    // 1
    var randomNo = random();
    randomArray.push(randomNo);
    // 2
    blinkall();
    // 3

    // 4
    // var status = check(random,input){
    //     compare each number of array 
    //     return true 
    //     return false
    // }
    // if(status===true){
    //     mainGame
    // }
    



    
}

var counter = 1 
var eventHandler = connect
document.addEventListener('keypress', eventHandler);

var statuss = "false";

function connect() {
    if(statuss==="true"){
        Heading.innerHTML=`Press A Key to Start`
        gameReset()
    }else{
        statuss="true"
        Heading.innerHTML=`Level ${counter}`
        mainGame()
        document.getElementsByClassName('tutorial-btn')[0].innerHTML="Stop"
        document.getElementsByClassName('container')[0].addEventListener('click',handler,false);
        // document.querySelector('.tutorial-btn').disabled=true;
        document.removeEventListener('keypress', eventHandler);
    }

    
}
var handler = function(event){
    mainEvent(event)
    event.stopPropagation();
}
  
  function mainEvent(event) {
    if(event.path.length===7){
        event.path[0].classList.add('pressed')
        setTimeout(() => {
            event.path[0].classList.remove('pressed')          
        }, 150);
        // var colorNumber = convertStringToInt(event.path[0].classList[1])

        inputArray.push(convertStringToInt(event.path[0].classList[1]))

        var status = checker(randomArray,inputArray)

        if(!status){

            gameOver()
        } 
        if( status ===true &&inputArray.length === randomArray.length){
            gameProcced()
        }
    }
  }

  function gameOver(){
    // Heading.innerHTML="Game Over"
    
    document.getElementById('go').classList.remove('hide')
    var audio = new Audio('sounds/wrong.mp3')   
    audio.play
    document.body.classList.add('Red')
    Heading.innerHTML=``
    setTimeout(() => {    
        Heading.innerHTML=`Press A Key to Start`
        document.body.classList.remove('Red')
        document.getElementById('go').classList.add('hide')
    }, 500);
    document.addEventListener('keypress', eventHandler);
    
    // rest the game
    gameReset()
  }

  function gameProcced() {
    counter++
    Heading.innerHTML=`Level ${counter}`
    inputArray = []
    mainGame()
  }

  function gameReset(){
    document.getElementsByClassName('tutorial-btn')[0].innerHTML="Start"
    counter=1
    
    inputArray = []
    randomArray=[]
    statuss="false"
    document.getElementsByClassName('container')[0].removeEventListener('click',handler,false);
    document.addEventListener('keypress', eventHandler);
  }