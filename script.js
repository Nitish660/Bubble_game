var timer = 60;
var score = 0;
var hitrn;

function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}


function MakeBubble() {
    var clutter = "";

    for (var i = 1; i < 190; i++) {
        var rn = Math.floor(Math.random() * 10); // Corrected Math.random()
        clutter += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
   var timerint = setInterval(function(){
      if(timer>0)
      {
        timer --;
        document.querySelector("#timerval").textContent=timer;
      }
      else{
          clearInterval(timerint);
          document.querySelector("#pbmt")=`<h2>Game Over>`
      }
    },1000);
}

function getNewHit(){
       hitrn = Number(Math.floor(Math.random()*10));
       document.querySelector("#hitval").textContent=hitrn;
}

document.querySelector("#pbtm")
.addEventListener("click",function(dets){
     

})


MakeBubble();
runTimer();
getNewHit();


