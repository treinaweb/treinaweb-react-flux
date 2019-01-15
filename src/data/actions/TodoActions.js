import AppDispatcher from '../dispatcher/AppDispatcher';
import TodoConstants from '../constants/TodoConstants';

const TodoActions = {
    create(description){
        AppDispatcher.dispatch({
            actionType: TodoConstants.TODO_CREATE,
            description
        })
    },
    update(item){
        AppDispatcher.dispatch({
            actionType: TodoConstants.TODO_UPDATE,
            item
        })
    },
    remove(id){
        AppDispatcher.dispatch({
            actionType: TodoConstants.TODO_REMOVE,
            id
        })
    },
    clear(){
        AppDispatcher.dispatch({
            actionType: TodoConstants.TODO_CLEAR
        })
    }
}

export default TodoActions;