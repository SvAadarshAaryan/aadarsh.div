// Correct answers
const correctAnswers = {
  q1: "a",
  q2: "a",
  q3: "a",
  q4: "c",
  q5: "a",
  q6: "a",
  q7: "a",
  q8: "a",
  q9: "a",
  q10: "a"
};

function checkAnswers() {
  let score = 0;

  for (let i = 1; i <= 10; i++) {
    const qName = "q" + i;
    const options = document.getElementsByName(qName);

    options.forEach(option => {
      const label = option.parentElement;
      // Reset previous colors
      label.style.color = "";
      
      // Remove previous correct answer hint if any
      const prevHint = label.querySelector(".correct-answer");
      if (prevHint) prevHint.remove();

      if (option.checked) {
        if (option.value === correctAnswers[qName]) {
          score++;
          label.style.color = "green"; // correct selection
        } else {
          label.style.color = "red"; // wrong selection
          
          // Show correct answer
          const hint = document.createElement("span");
          hint.className = "correct-answer";
          hint.style.color = "aqua";
          hint.style.marginLeft = "10px";
          hint.innerText = `(Correct: ${correctAnswers[qName].toUpperCase()})`;
          label.appendChild(hint);
        }
      }
    });
  }

  // Animate score display
  animateScore(score);
}

function animateScore(finalScore) {
  const scoreElement = document.getElementById("score");
  let current = 0;
  const interval = setInterval(() => {
    scoreElement.innerHTML = `<b>Your Score: ${current} / 10</b>`;
    current++;
    if (current > finalScore) {
      clearInterval(interval);
    }
  }, 150); // Adjust speed here
}
