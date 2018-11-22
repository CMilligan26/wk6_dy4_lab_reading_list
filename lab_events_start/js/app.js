document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleForm);

  const deleteButton = document.querySelector('#deleteButton')
  deleteButton.addEventListener('click', handleClear);
})

const handleClear = function (){
  const readingClear = document.querySelector('#reading-list');
  readingClear.textContent = '';
}

const handleForm = function ( event ) {
  console.log('handleForm');
  event.preventDefault();

  const bookDiv = document.createElement('div');

  const title = document.createElement('p');
  title.textContent = `${event.target.title.value}`;

  const author = document.createElement('p');
  author.textContent = `${event.target.author.value}`;

  const category = document.createElement('p');
  category.textContent = `${event.target.category.value}`;

  bookDiv.appendChild(title);
  bookDiv.appendChild(author);
  bookDiv.appendChild(category);

  const readingList = document.querySelector('#reading-list');
  readingList.appendChild(bookDiv);

  event.target.reset();
};
