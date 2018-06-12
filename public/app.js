var init = function () {
  var button = document.querySelector('button');
  button.addEventListener('click', handleButtonClick);

  var todosArray = JSON.parse(localStorage.getItem('todoList')) || [];
  populate(todosArray);
}

var populate = function (todos) {
  // this function needs to:
    for (item of todos) {
      addItem(item);
    }
  // - loop through the array of todos, invoking addItem() for each todo item
}

var addItem = function (item) {
  var ul = document.querySelector('#todo-list');
  // this function needs to:
  // - create an li element containing the string 'item'
    let li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
    console.log(item);
}

var handleButtonClick = function () {
  // this function needs to:
  // - get hold of the input box's value
  // - append it to the "todo-list" ul by invoking addItem()
  // - add it to local storage by invoking save()
    const input = document.querySelector('#new-item');
    const newItem = input.value;
    addItem(newItem);
    save(newItem);

}

var save = function (newItem) {
  // this function needs to:
  // - get the data back from local storage and parse to an array
  var todosArray = JSON.parse(localStorage.getItem('todoList')) || [];
  // - add the newItem to the array
  todosArray.push(newItem);
  const jsonStringItem = JSON.stringify(todosArray);
  localStorage.setItem("todoList", jsonStringItem);
  // - stringify the updated array

  // - save it back to localstoage

}

window.addEventListener('load', init);
