import { v4 as uuidv4 } from 'uuid';

import { showMessage } from './js/notification';
import refs from './js/refs';
import { saveToLS, getFromLS } from './js/helpers';
import { renderMarkup } from './js/renderMarkup';

import './sass/main.scss';

const { todoWrapperRef, todoInputRef, todoBtnRef, todoListRef } = refs;
let arrOfTodo = [];

render();

todoBtnRef.addEventListener('click', onCreateMagic);
window.addEventListener('keydown', onPressKey);
todoListRef.addEventListener('click', event => {
  const currentBtn = event.target.dataset.action;

  if (currentBtn) {
    const id = event.target.parentNode.id;

    const filteredTodos = arrOfTodo.filter(todo => todo.id !== id);

    renderMarkup(todoListRef, filteredTodos);
    saveToLS('todos', filteredTodos);
    render();
  }
});

function render() {
  const parsedTodos = getFromLS('todos');

  if (parsedTodos) {
    arrOfTodo = parsedTodos ? parsedTodos : [];
  }

  renderMarkup(todoListRef, arrOfTodo);
}

function onCreateMagic() {
  todoListRef.innerHTML = '';

  const inputText = todoInputRef.value.trim();

  if (!inputText) return showMessage('error', 'Your input empty!');

  arrOfTodo.push({ id: uuidv4(), description: `${inputText}`, status: false });

  showMessage();
  saveToLS('todos', arrOfTodo);

  renderMarkup(todoListRef, arrOfTodo);
  // render();

  todoInputRef.value = '';
}

function onPressKey(event) {
  if (event.key === 'Enter') {
    onCreateMagic();
  }
}
