let button = document.getElementById("myButton");
document.addEventListener('keydown', function(event) {
  if (event.key === ' ' || event.key === 'Space') {
    const result = Math.random() >= 0.5 ? "hoofd" : "munt";
    document.getElementById("result").innerHTML = result;

    let coinImage = document.getElementById("coinFlip");
    let originalSrc = coinImage.src;

    if (result === "hoofd") {
      setTimeout(() => {
        alert("je hebt hoofd opniew proberen?");
      }, 1100);
      //gif is van https://tenor.com/nl/view/coin-flip-flip-coin-gif-19747326
      coinImage.src = "img/coin-flip-flip.gif";
      setTimeout(() => {
        changeBackground("white");
        coinImage.src = originalSrc;
      }, 1500);
    } else {
      setTimeout(() => {
        alert("je hebt munt opniew proberen?");
      }, 1100);
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