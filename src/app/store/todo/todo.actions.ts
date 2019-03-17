import { Action } from '@ngrx/store';

export const ADD_TODO = '[TODO] Add todo';
export const TOGGlE_TODO = '[TODO] Toggle todo';
export const TOGGLE_ALL_TODO = '[TODO] Toggle all todo';
export const UPDATE_TODO = '[TODO] Update todo';
export const DELETE_TODO = '[TODO] Delete todo';
export const CLEAR_TODO = '[TODO] Clear todo';

export class AddTodoAction implements Action{
    readonly type = ADD_TODO;
    constructor ( public text: string ) {}
}

export class ToggleTodoAction implements Action{
    readonly type = TOGGlE_TODO;
    constructor ( public id: number ) {}
}

export class ToggleAllTodoAction implements Action{
    readonly type = TOGGLE_ALL_TODO;
    constructor ( public completed: boolean ) {}
}

export class UpdateTodoAction implements Action{
    readonly type = UPDATE_TODO;
    constructor ( public id: number, public text: string ) {}
}

export class DeleteTodoAction implements Action{
    readonly type = DELETE_TODO;
    constructor ( public id: number ) {}
}

export class ClearTodoAction implements Action{
    readonly type = CLEAR_TODO;
}

export type Actions =
    AddTodoAction |
    ToggleTodoAction |
    ToggleAllTodoAction |
    UpdateTodoAction |
    DeleteTodoAction |
    ClearTodoAction;