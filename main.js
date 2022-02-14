(function () {

function createHeader(title) {
  let appTitle = document.createElement('h2');
  appTitle.classList.add('main-header');
  appTitle.innerHTML = title;
  return appTitle;
};

function createForm() { 
  let form = document.createElement('form');
  let input = document.createElement('input');
  let buttonWrapper = document.createElement('div');
  let itemButton = document.createElement('button');

  input.placeholder = 'Введите название нового дела';
  buttonWrapper.classList.add('button-wrapper');
  form.classList.add('todo-form');
  itemButton.classList.add('item-btn');
  itemButton.textContent = 'Добавить дело';

  buttonWrapper.append(itemButton);
  form.append(input);
  form.append(buttonWrapper);

  return {
    form,
    input,
    itemButton,
  };
};

function createList() { 
  let list = document.createElement('ul');
  list.classList.add('todo-list');
  return list;
};

document.addEventListener('DOMContentLoaded', function() {

  let container = document.querySelector('#todo-app');

  let todoHeader = createHeader('Список дел');
  let todoForm = createForm();
  let todoList = createList();

  container.append(todoHeader);
  container.append(todoForm.form);
  container.append(todoList);
});

})();
