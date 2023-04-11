
<a-entity position-"-23.5 19.3 0">
<a-entity
position=""
text="font: aileronsemibold; width: 14; color: black; value: TIME\nREMAINING"
></a-entity>
<a-entity
id="time"
position="-9.8 0.3 0"
text="font: exo2bold; align: center; width: 38; color: black; value: 00:00"
></a-entity>
</a-entity>


updateScore: function () {
var element = document.querySelector("#score"); var count = element.getAttribute("text").value; var currentScore = parseInt(count);
currentScore += 50;
element.setAttribute("text", {
value: currentScore,
});
},


startTimer: function (duration, timerEl) {
var minutes;
var seconds;
setInterval(() => {
if (duration >=0) {
minutes = parseInt(duration / 60);
seconds = parseInt(duration % 60);
if (minutes < 10) {
}
minutes "0" + minutes;
if (seconds <10){
},
seconds
}
"0" + seconds;
timerEl.setAttribute("text", {
value: minutes+":"+ seconds, });
duration=1;
}
else {
}
this.gameOver();
}, 1000)