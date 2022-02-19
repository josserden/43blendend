export const renderMarkup = (ref, todos) => {
  ref.innerHTML = '';

  const markup = todos
    .map(
      ({ id, description, status }) => `<li class="todo__list-item" id="${id}">
    <p class="todo__list-text"> ${description}</p>
    <input type="checkbox" data-status="${status}" class="todo__list-checkbox">
    <button type="button" class="todo__list-btn"      data-action="delete">Удалить</button>
    </li> `,
    )
    .join('');

  ref.insertAdjacentHTML('beforeend', markup);
};
