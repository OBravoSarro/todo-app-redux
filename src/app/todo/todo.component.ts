import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app/app.reducer';
import { ToggleAllTodoAction } from '../store/todo/todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {

  completedAll: boolean = false;

  constructor( private store: Store<AppState> ) { }

  ngOnInit() {
  }

  toggleAll() {
    this.completedAll = !this.completedAll;
    this.store.dispatch( new ToggleAllTodoAction( this.completedAll ));
  }

}
