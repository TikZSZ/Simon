

const colorArray=["green","red","blue","yellow"];
const colorArrays=["0","1","2","3"];
var randoHistory=[0,2];
var randoTrack=[];


document.getElementsByClassName('container')[0].addEventListener('click',(event)=>{
    if(event.path.length===7){

        r =convertStringToInt(event.path[0].classList[1])
        randoTrack.push(r)
        checker(r)
    }
    event.stopPropagation();

},false);
var v1=0;
var v2=0;
function addPress(element){
    setTimeout(() => {
        
        element.classList.add('pressed')
    }, v1);
}
function removePress(element){
    setTimeout(() => {
        element.classList.remove('pressed')
        
    }, v2);
}
function press(rv){
     // 0,1,2,3
    
    if(rv===0){
        anime(Green)
        
    }
    else if(rv===1){
        anime(Red)
        
    }
    else if(rv===2){
        anime(Blue)

    }
    else if(rv===3){
        anime(Yellow)

    }

}

function anime(element) {
    element.classList.add("fade")
}


function mainGame(){
    for(var i=0;i<randoHistory.length;i++){
        for(var j=0; j<1000;j++){

        }
        press(randoHistory[i])
    }
    
}
f

var count = 0;
function checker(key) {
    if(count<randoHistory.length){
        if(randoHistory[count]===key){
            var a = random()
            console.log(a);
            randoHistory.push(a)
            mainGame()
            alert("fuck you")
            count++
        }else{
            document.querySelector('body').style.backgroundColor="red";
        }
    }
    // for(var i=0;i<randoHistory.length;i++){
    //     if(randoHistory[i]===randoTrack[i]){
    //         console.log('ok');
    //         if(i===randoHistory.length-1){
    //             console.log("super ok");
    //             var kv=random();
    //             randoHistory.push(kv)
    //             mainGame()
    //             count++
    //         }
    //     }else{ 
    //         console.log("not ok");
    //         document.querySelector('body').style.backgroundColor="red";

    //     }
    // }
    // i=0
    // while(i<randoHistory.length){
    //     if(randoHistory[i]===randoTrack[i]){
    //         console.log("ok");
    //         i++
    //     }else{ 
    //         document.querySelector('body').style.backgroundColor="red";
    //         break

    //     }
    // }



}

var eventHandler = function(event){
    //do things
    var rv=random();
    randoHistory.push(rv)
    console.log(rv);
    mainGame()
    count++


    document.removeEventListener('keypress', eventHandler);
  }
  
  document.addEventListener('keypress', eventHandler);

  var p = document.createElement("P");
  p.innerHTML=`Level ${counter}`
  document.getElementById('level-title').nextElementSibling.appendChild(p)