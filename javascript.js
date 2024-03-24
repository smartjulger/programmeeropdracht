document.addEventListener('keydown', function(event) {
  if (event.key === ' ' || event.key === 'Space') {
    const result = Math.random() >= 0.5 ? "Heads" : "Tails";
    document.getElementById("result").innerHTML = result;

    let coinImage = document.getElementById("coinFlip");
    let originalSrc = coinImage.src;

    if (result === "Heads") {
      setTimeout(() => {
        changeBackground("red");
      }, 500);
      setTimeout(() => {
        alert("You got heads! Want to try again?");
      }, 1000);
      //gif is van https://tenor.com/nl/view/coin-flip-flip-coin-gif-19747326
      coinImage.src = "img/coin-flip-flip.gif";
      setTimeout(() => {
        changeBackground("white");
        coinImage.src = originalSrc;
      }, 1500);
    } else {
      setTimeout(() => {
        changeBackground("green");
      }, 500);
      setTimeout(() => {
        alert("You got tails! Want to try again?");
      }, 1000);
      //gif is van https://tenor.com/nl/view/coin-flip-flip-coin-gif-19747326
      coinImage.src = "img/coin-flip-flip.gif";
      //reset de achtergrond weer en de gif
      setTimeout(() => {
        changeBackground("white");
        //img terug naar orgineel is met behulp van blackbox gedaan prompt die gebruikt was: ik wil me gif weer terug naar orgineel krijgen
        coinImage.src = originalSrc;
      }, 1500);
    }
  }
});

//achtergrond kleur
function changeBackground(color) {
  document.body.style.background = color;
}