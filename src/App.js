import React, { Component } from 'react';
import './App.css';

import ToDoList from './views/components/ToDoList';
import { TodoService } from './data/services/TodoService';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todoList: []
    }
  }

  async componentDidMount(){
    const todoList = await TodoService.list();
    this.setState({todoList});
  }

  render() {
    const { state } = this;
    return (
      <div className="App">
        <ToDoList items={state.todoList} />
      </div>
    );
  }
}

export default App;
