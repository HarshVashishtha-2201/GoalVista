const dreamForm = document.getElementById('dream-form');
const dreamInput = document.getElementById('dream-input');
const currentAgeInput = document.getElementById('current-age');
const achieveAgeInput = document.getElementById('achieve-age');
const dreamList = document.getElementById('dream-list');
const goalsList = document.getElementById('goals-list');

dreamForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const dreamText = dreamInput.value;
  const currentAge = parseInt(currentAgeInput.value);
  const achieveAge = parseInt(achieveAgeInput.value);

  if (dreamText && currentAge && achieveAge && achieveAge > currentAge) {
    addGoal(dreamText, currentAge, achieveAge);
    clearInputs();
  } else {
    alert('Please enter valid information.');
  }
});

function addGoal(text, currentAge, achieveAge) {
  const remainingYears = achieveAge - currentAge;

  const goalItem = document.createElement('li');
  goalItem.classList.add('goal-item');
  goalItem.innerHTML = `
    ${text}
    <div class="goal-details">
      <p>Current Age: ${currentAge}</p>
      <p>Achieve by Age: ${achieveAge}</p>
      <p>Years Left: ${remainingYears}</p>
      <div class="action-buttons">
        <button class="complete">✔️</button>
        <button class="delete">🗑️</button>
      </div>
    </div>
  `;

  const completeButton = goalItem.querySelector('.complete');
  const deleteButton = goalItem.querySelector('.delete');
  const details = goalItem.querySelector('.goal-details');

  goalItem.addEventListener('click', () => {
    details.style.display = details.style.display === 'none' ? 'block' : 'none';
  });

  completeButton.addEventListener('click', () => {
    goalItem.style.textDecoration = 'line-through';
  });

  deleteButton.addEventListener('click', () => {
    goalItem.remove();
  });

  goalsList.appendChild(goalItem);
}

function clearInputs() {
  dreamInput.value = '';
  currentAgeInput.value = '';
  achieveAgeInput.value = '';
}
