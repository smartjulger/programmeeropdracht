let kopCount = 0;
let muntCount = 0;
let button = document.getElementById("myButton");
const kop = new Audio("audio/kop.mp3");
const munt = new Audio("audio/munt.mp3");

button.addEventListener('click', function () {
  simulateButtonClick();
});

function simulateButtonClick() {
  let result;
  if (Math.random() >= 0.5) {
    result = "kop";
  } else {
    result = "munt";
  }
  document.getElementById("result").innerHTML = result;

  let coinImage = document.getElementById("coinFlip");
  let originalSrc = coinImage.src;

  if (result === "kop") {
    kopCount++;
    setTimeout(() => {
      alert("je hebt kop opnieuw proberen?");
    }, 1100);
    coinImage.src = "img/coin-flip-flip.gif";
    setTimeout(() => {
      coinImage.src = originalSrc;
    }, 1500);
  } else {
    muntCount++;
    setTimeout(() => {
      alert("je hebt munt opnieuw proberen?");
    }, 1100);
    coinImage.src = "img/coin-flip-flip.gif";
    setTimeout(() => {
      coinImage.src = originalSrc;
    }, 1500);
  }

  updateTally();
  checkCounts();
}

function updateTally() {
  document.getElementById("resultaten").innerHTML = `Kop: ${kopCount}, Munt: ${muntCount}`;
}

function checkCounts() {
  if (kopCount === 10) {
    document.body.style.backgroundColor = "lightblue";
    kop.play();
    setTimeout(resetGame, 20000); 
  } else if (muntCount === 10) {
    document.body.style.backgroundColor = "lightgreen";
    munt.play();
    setTimeout(resetGame, 20000); 
  }
}
// vriend genaamd juup heeft geholpen met resetgame
function resetGame() {
  kopCount = 0;
  muntCount = 0;
  document.getElementById("resultaten").innerHTML = "Kop: 0, Munt: 0";
  document.body.style.backgroundColor = ""; // 
}
// vriend genaamd juup heeft geholpen met resetgame