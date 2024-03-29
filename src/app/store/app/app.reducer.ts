import { ActionReducerMap } from '@ngrx/store';

import { Todo } from '../../todo/model/todo.model';
import { validFilters } from '../filter/filter.actions';

import * as fromTodo from '../todo/todo.reducer';
import * as fromFilter from '../filter/filter.reducer';

export interface AppState {
    todos: Todo[];
    filter: validFilters
}

export const appReducers: ActionReducerMap<AppState> = {
    todos: fromTodo.todoReducer,
    filter: fromFilter.filterReducer
}