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
  itemButton.disabled = true;

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

function createTodoApp(container, title) {
  
  let todoHeader = createHeader(title);
  let todoForm = createForm();
  let todoList = createList();
//  let loadData = caseData();

  container.append(todoHeader);
  container.append(todoForm.form);
  
  function activateButton() {
    let button = document.querySelector('.item-btn');
    let input = document.querySelector('input');

    input.addEventListener('keyup', inpValue);

    function inpValue() {
      if (!input.value) {
        return button.disabled = true;
      } else {
        return button.disabled = false;
      };
    };
    return;
  };
  activateButton();

  todoForm.form.addEventListener('submit', function(e) {
  
      e.preventDefault();
  
      if (!todoForm.input.value) {
        return;
      };
  
      container.append(todoList);
  
  
      let todoItem = createItem(todoForm.input.value);
  


      todoItem.deleteButton.addEventListener('click', () => {
        todoItem.newItem.remove();
      });
  
      todoItem.doneButton.addEventListener('click', () => {
        todoItem.newItem.classList.toggle('green');
      });
  
      todoList.append(todoItem.newItem);
  
      todoForm.input.value = '';
      todoForm.itemButton.disabled = true;
  
  });
  
  function createItem(name) {
  
      let newItem = document.createElement('li');
      let groupButton = document.createElement('div');
      let doneButton = document.createElement('button');
      let deleteButton = document.createElement('button');

let data = 

      groupButton.classList.add('btn-container');
      newItem.classList.add('task');
      newItem.textContent = name;
      doneButton.classList.add('done');
      doneButton.textContent = 'Готово';
      deleteButton.classList.add('delete');
      deleteButton.textContent = 'Удалить';
      
      groupButton.append(doneButton);
      groupButton.append(deleteButton);
      newItem.append(groupButton);
      
      return {
        newItem,
        doneButton,
        deleteButton,
      }
      
  };
  
};

function caseData() {
  let data = [];
  console.log(data);
  return data;
};



window.createTodoApp = createTodoApp;

})();
