import { v4 as uuidv4 } from 'uuid';

import { showMessage } from './js/notification';
import refs from './js/refs';

import './sass/main.scss';

const { todoWrapperRef, todoInputRef, todoBtnRef, todoListRef } = refs;

todoBtnRef.addEventListener('click', onCreateMagic);
window.addEventListener('keydown', onPressKey);
todoListRef.addEventListener('click', event => {
  const currentBtn = event.target.dataset.action;

  if (currentBtn) {
    const id = event.target.parentNode.id;
    console.dir(id);
  }
});

let arrOfTodo = [];

function onCreateMagic() {
  todoListRef.innerHTML = '';

  const inputText = todoInputRef.value.trim();

  if (!inputText) {
    showMessage('error', 'Your input empty!');

    return;
  }

  if (inputText) {
    arrOfTodo.push({ id: uuidv4(), description: `${inputText}`, status: false });
    showMessage();

    const render = arrOfTodo.map(renderMarkup).join('');
    todoListRef.innerHTML += render;
  }
  todoInputRef.value = '';
  console.table(arrOfTodo);
}

function renderMarkup({ id, description, status }) {
  return `

    <li class="todo__list-item" id="${id}">
    <p class="todo__list-text"> ${description}</p>
    <input type="checkbox" data-status="${status}" class="todo__list-checkbox">
    <button type="button" class="todo__list-btn" data-action="delete">Удалить</button>
</li> `;
}

function onPressKey(event) {
  if (event.key === 'Enter') {
    onCreateMagic();
  }
}
