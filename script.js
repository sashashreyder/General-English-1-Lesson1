
document.getElementById("checkBtn").addEventListener("click", function () {
  const inputs = document.querySelectorAll('input[type="text"]');
  let correctCount = 0;
  inputs.forEach(input => {
    const answer = input.getAttribute("data-answer").toLowerCase().trim();
    const user = input.value.toLowerCase().trim();
    if (user === answer) {
      input.classList.add("correct");
      input.classList.remove("incorrect");
      correctCount++;
    } else {
      input.classList.add("incorrect");
      input.classList.remove("correct");
    }
  });
  const modal = document.getElementById("resultModal");
  const resultText = document.getElementById("resultText");
  resultText.textContent = `You got ${correctCount} out of ${inputs.length} correct!`;
  modal.classList.remove("hidden");
  modal.addEventListener("click", () => modal.classList.add("hidden"));
});
