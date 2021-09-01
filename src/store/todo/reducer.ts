import * as types from 'store/todo/actions';
import { RootState } from 'store';
import { TodoAction, TodosState } from './types';

const initialState: TodosState = {
    count: 0,
    todoList: [],
    msg: "",
    addTodoLoading: false,
    addTodoError: null,
    getTodosLoading: false,
    getTodosError: null,
    checkTodoLoading: false,
    checkTodoError: null,
};

const reducer = (state = initialState, action: TodoAction) => {
    switch (action.type) {
        case types.ADD_TODO_PENDING:
            console.log(action.type);
            return {
                ...state,
                addTodoLoading: true,
            }
        case types.ADD_TODO_SUCCESS:
            console.log(action.type);
            return {
                ...state,
                addTodoLoading: false,
                msg: action.payload.msg,
            }
        case types.ADD_TODO_FAILURE:
            console.log(action.type);
            return {
                ...state,
                addTodoLoading: false,
                addTodoFailure: action.payload
            }
        case types.GET_TODOS_PENDING:
            console.log(action.type);
            return {
                ...state,
                getTodosLoading: true,
            }
        case types.GET_TODOS_SUCCESS:
            console.log(action.type);
            return {
                ...state,
                getTodosLoading: false,
                todoList: action.payload.todoList,
                count: action.payload.count,
            }
        case types.GET_TODOS_FAILURE:
            console.log(action.type);
            return {
                ...state,
                getTodosLoading: false,
                getTodosError: action.payload,
            }
        // case types.CHANGE_TODO_CONTENT_PENDING:
        //     return;
        // case types.CHANGE_TODO_CONTENT_SUCCESS:
        //     return;
        // case types.CHANGE_TODO_CONTENT_FAILURE:
        //     return;
        case types.CHECK_TODO_PENDING:
            console.log(action.type);
            return {
                ...state,
                checkTodoLoading: true,
            }
        case types.CHECK_TODO_SUCCESS:
            console.log(action.type);
            console.log((state.msg === action.payload.msg));
            return {
                ...state,
                checkTodoLoading: false,
                msg: action.payload.msg,
            }
        case types.CHECK_TODO_FAILURE:
            console.log(action.type);
            return {
                ...state,
                checkTodoLoading: false,
                checkTodoError: action.payload,
            }
        // case types.DELETE_TODO_PENDING:
        //     return;
        // case types.DELETE_TODO_SUCCESS:
        //     return;
        // case types.DELETE_TODO_FAILURE:
        //     return;
        default:
            return state;
        
    }
}

export const todoSelector = (state: RootState) => state.todoReducer;

export default reducer;