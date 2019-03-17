import * as fromTodo from './todo.actions';
import { Todo } from '../../todo/model/todo.model';

const todo_1 = new Todo( 'Tarea 1' );
const todo_2 = new Todo( 'Tarea 2' );
const todo_3 = new Todo( 'Tarea 3' );
todo_3.completed = true;

const initState: Todo[] = [todo_1, todo_2, todo_3];

export function todoReducer ( state = initState, action: fromTodo.Actions): Todo[]{

    switch ( action.type ) {

        case fromTodo.ADD_TODO:
            const todo = [ new Todo( action.text ) ];
            return [...state, ...todo];

        case fromTodo.TOGGlE_TODO:
            return state.map( todo => {
                if( todo.id === action.id ) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    };
                } else {
                    return todo;
                }
            });

        case fromTodo.TOGGLE_ALL_TODO:
            return state.map( todo => {
                return { ...todo, completed: action.completed };
            });

        case fromTodo.UPDATE_TODO:
            return state.map( todo => {
                if( todo.id === action.id ) {
                    return {
                        ...todo,
                        text: action.text
                    };
                } else {
                    return todo;
                }
            });

        case fromTodo.DELETE_TODO:
            return state.filter( todo => todo.id !== action.id );

        case fromTodo.CLEAR_TODO:
            return state.filter( todo => !todo.completed );

        default:
            return state;
    }

}