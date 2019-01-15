import React, { Component } from 'react';
import './App.css';

import ToDoList from './views/components/ToDoList';
import NewToDoItem from './views/components/NewToDoItem';

import TodoActions from './data/actions/TodoActions';
import TodoStore from './data/stores/TodoStore';

async function getTodoState(){
  return {
    todoList: await TodoStore.getAll()
  }
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todoList: []
    }

    this._onChange = this._onChange.bind(this);
    this._onChange();
  }

  componentDidMount(){
    TodoStore.addChangeListener(this._onChange);  
  }

  componentWillUnmount(){
    TodoStore.removeChangeListener(this._onChange);
  }

  async _onChange(){
    this.setState(await getTodoState());
  }

  render() {
    const { state } = this;
    return (
      <div className="App">
        <NewToDoItem onAdd={TodoActions.create} />
        <hr />
        <button className="tw-btn" onClick={TodoActions.clear} >Limpar</button>
        <hr />
        <ToDoList items={state.todoList} onRemove={TodoActions.remove} onUpdate={TodoActions.update} />
      </div>
    );
  }
}

export default App;
