let kopCount = 0;
    let muntCount = 0;
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
    }

    function updateTally() {
      document.getElementById("resultaten").innerHTML = `Kop: ${kopCount}, Munt: ${muntCount}`;
    }