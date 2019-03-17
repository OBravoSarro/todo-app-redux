import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app/app.reducer';
import { Todo } from '../model/todo.model';
import * as fromFilter from '../../store/filter/filter.actions';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styles: []
})
export class TodosListComponent implements OnInit {

  todos: Todo[] = [];
  filter: fromFilter.validFilters;

  constructor( private store: Store<AppState> ) { }

  ngOnInit() {
    this.store.subscribe( state => {
      this.todos = state.todos;
      this.filter = state.filter;
    });
  }

}
