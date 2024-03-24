let button = document.getElementById("myButton");

// Keystroke event listener
document.addEventListener('keydown', function(event) {
  if (event.key === 'a') { 
    simulateButtonClick();
  }
});

button.addEventListener('click', function() {
  simulateButtonClick();
});

function simulateButtonClick() {
  const result = Math.random() >= 0.5 ? "hoofd" : "munt";
  document.getElementById("result").innerHTML = result;

  let coinImage = document.getElementById("coinFlip");
  let originalSrc = coinImage.src;

  if (result === "hoofd") {
    setTimeout(() => {
      alert("je hebt hoofd opnieuw proberen?");
    }, 1100);
    coinImage.src = "img/coin-flip-flip.gif";
    setTimeout(() => {
      changeBackground("white");
      coinImage.src = originalSrc;
    }, 1500);
  } else {
    setTimeout(() => {
      alert("je hebt munt opnieuw proberen?");
    }, 1100);
    coinImage.src = "img/coin-flip-flip.gif";
    setTimeout(() => {
      changeBackground("white");
      coinImage.src = originalSrc;
    }, 1500);
  }
}

function changeBackground(color) {
  document.body.style.background = color;
}