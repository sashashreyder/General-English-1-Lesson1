const checkBtn = document.getElementById('checkBtn');
const modal = document.getElementById('modal');
const resultMessage = document.getElementById('resultMessage');
const closeBtn = document.querySelector('.close-btn');

checkBtn.addEventListener('click', () => {
  const inputs = document.querySelectorAll('input[type="text"]');
  let correct = 0;

  inputs.forEach(input => {
    const answer = input.dataset.answer.trim().toLowerCase();
    const user = input.value.trim().toLowerCase();

    input.classList.remove('correct', 'incorrect');

    if (user === answer) {
      input.classList.add('correct');
      correct++;
    } else {
      input.classList.add('incorrect');
    }
  });

  resultMessage.innerHTML =
    correct === inputs.length
      ? `<h2>🎉 Great Job!</h2><p>You got all ${inputs.length} correct!</p>`
      : `<h2>⚠️ Try Again</h2><p>You got ${correct} out of ${inputs.length} correct.</p>`;

  modal.classList.remove('hidden');
});

closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.add('hidden');
  }
});




