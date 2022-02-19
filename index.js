
//1.Создаем функцию добавленя задачи в разметку
//1.1 получаем ссылки на эл-ты разметки
const todoWrapperRef = document.querySelector('.todo__wrapper');
//console.log(todoWrapperRef);
const todoInputRef = todoWrapperRef.querySelector('.todo__input');
//console.log(todoInputRef);
const todoBtnRef = todoWrapperRef.querySelector('.todo__btn');
//console.log(todoBtnRef);
const todoListRef = todoWrapperRef.querySelector('.todo__list');
//console.log(todoListRef);
//1.2 вешаем слушателя событий 

todoBtnRef.addEventListener('click', onCreateMagic );
window.addEventListener('keydown',onPressKey);

 //создаем массив обЪектов где будет хваниться данные с инпута

 let arrOfTodo = [];


function onCreateMagic(){
todoListRef.innerHTML = '';

   const inputText = todoInputRef.value;

if(inputText){
   arrOfTodo.push({description:`${inputText}`, status:false});

   const render = arrOfTodo.map(renderMarkup).join('');
   //console.log(render);

 todoListRef.innerHTML += render}
todoInputRef.value=''}
;
console.log(arrOfTodo);

 function renderMarkup({description, status}){
    return `
    
    <li class="todo__list-item">
    <p class="todo__list-text"> ${description}</p>
    <input type="checkbox" data-status="${status}" class="todo__list-checkbox">
    <button type="button" class="todo__list-btn">Удалить</button>
</li> `;
 };
 
// делаем пррверку на клавиатуру
function onPressKey(event){
   //console.log(event.key)
   if (event.key === 'Enter'){
      onCreateMagic();
   }
};



