// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
// Select the heart glyphs
const grabLikeHeart = document.querySelectorAll(".like-glyph");

// For each heart glyph, add a click event listener that calls the server mimic
grabLikeHeart.forEach(heart => {
  heart.addEventListener("click", () => {
      mimicServerCall()
        // A then method on the event listener to first check if activated and remove on click, then if not activated, activate and fill.
        .then(() => {
          if (heart.classList.contains("activated-heart")) {
            heart.classList.remove("activated-heart");
            heart.textContent = EMPTY_HEART;
          } else {
          heart.classList.add("activated-heart");
          heart.textContent = FULL_HEART;
          }
        })
        // A catch method to get the error to show as requested by removing or adding the "hidden" class and set a timeout of 3 seconds to hide the error again.
        .catch(() => {
          const grabErrorModal = document.querySelector("#modal");
          grabErrorModal.classList.remove("hidden");
          setTimeout(() => {
            grabErrorModal.classList.add("hidden");
          }, 3000);
        });
  });
});


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
