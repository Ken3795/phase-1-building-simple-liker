// JavaScript Code
const EMPTY_HEART = '♡'; // Empty heart character
const FULL_HEART = '♥';  // Full heart character

document.addEventListener("DOMContentLoaded", () => {
  const hearts = document.querySelectorAll(".like-glyph");
  const modal = document.getElementById("modal");
  const modalMessage = document.getElementById("modal-message");

  hearts.forEach((heart) => {
    heart.addEventListener("click", () => {
      mimicServerCall()
        .then(() => {
          if (heart.textContent === EMPTY_HEART) {
            heart.textContent = FULL_HEART; // Set to full heart
            heart.classList.add("activated-heart");
          } else {
            heart.textContent = EMPTY_HEART; // Set to empty heart
            heart.classList.remove("activated-heart");
          }
        })
        .catch((error) => {
          // Display error modal
          modal.classList.remove("hidden");
          modalMessage.textContent = error;

          // Hide modal after 3 seconds
          setTimeout(() => {
            modal.classList.add("hidden");
          }, 3000);
        });
    });
  });
});

// Mock server call function
function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isSuccess = Math.random() < 0.8; // 80% chance of success
      if (isSuccess) {
        resolve("Pretend remote server notified of action!");
      } else {
        reject("Random server error. Try again.");
      }
    }, 300);
  });
}
