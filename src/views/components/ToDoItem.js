import React, { Component } from 'react';

class ToDoItem extends Component{
    static defaultProps = {
        item: {},
        onRemove: () => {}
    }

    constructor(props){
        super(props);
        this.remove = this.remove.bind(this);
    }

    remove(){
        this.props.onRemove(this.props.item.id);
    }

    render(){
        const { props } = this,
            item = props.item;
        return (
            <li className="todo-list-item" >
                <input className="tw-check" type="checkbox" checked={item.isChecked} />
                <input className="tw-input" type="text" disabled={item.isChecked} defaultValue={item.description} />
                <button className="tw-btn" onClick={this.remove} >X</button>
            </li>
        );
    }
}

export default ToDoItem; 