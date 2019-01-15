import TodoService from '../services/TodoService';

let _todoList = [];

function createItem(description){
    return TodoService.create({
      description,
      isChecked: false
    })
      .then(newItem => {
        _todoList.push(newItem);
      })
}

function updateItem(newItem){
    const itemIndex = _todoList.findIndex(item => item.id === newItem.id);
    _todoList[itemIndex] = newItem;
    return TodoService.update(newItem);
}


function removeItem(id){
    const itemIndex = todoList.findIndex(item => item.id === id);
    _todoList.splice(itemIndex, 1);
    return TodoService.remove(id);
}

function clearAll(){
    const todo = [],
      done = [];

    _todoList.forEach(item => {
      if(item.isChecked){
        done.push(item);
      }else{
        todo.push(item);
      }
    });

    done.forEach(item => removeItem(item.id));
    _todoList = todo;
}


