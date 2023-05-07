const form = document.querySelector('#shopping-form');
const shoppingList = document.querySelector('#shopping-list');
const counter = document.querySelector('#counter');

let remainingItems = 0;

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const newItem = form.querySelector('input[type="text"]').value;
  if (newItem !== '') {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('click', function() {
      const span = this.nextElementSibling;
      span.classList.toggle('strikethrough');
      if (this.checked) {
        remainingItems--;
      } else {
        remainingItems++;
      }
      updateCounter();
    });
    li.appendChild(checkbox);
    const span = document.createElement('span');
    span.classList.add('item-name');
    span.textContent = newItem;
    li.appendChild(span);
    const deleteButton = document.createElement('span');
    deleteButton.classList.add('delete');
    deleteButton.textContent = 'X';
    deleteButton.addEventListener('click', function() {
      if (!checkbox.checked) {
        remainingItems--;
        updateCounter();
      }
      li.remove();
    });
    li.appendChild(deleteButton);
    shoppingList.appendChild(li);
    remainingItems++;
    updateCounter();
    form.reset();
  }
});

function updateCounter() {
  counter.textContent = `${remainingItems} remaining item${remainingItems !== 1 ? 's' : ''}`;
}
