import { Component, OnInit } from '@angular/core';
import * as fromFilter from '../../store/filter/filter.actions';
import * as fromTodo from '../../store/todo/todo.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app/app.reducer';
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  validFilters: fromFilter.validFilters[] = ['all', 'completed', 'pending'];
  activeFilter: fromFilter.validFilters;
  pendings: number;

  constructor( private store: Store<AppState> ) { }

  ngOnInit() {

    this.store.subscribe( state => {
      this.activeFilter = state.filter;
      this.countPendings( state.todos );
    });

  }

  changeFilter(newFilter: fromFilter.validFilters) {
    this.store.dispatch(new fromFilter.SetFilterAction( newFilter ));
  }

  countPendings( todos: Todo[] ) {
    this.pendings = todos.filter( todo => !todo.completed ).length;
  }

  clearTodo() {
    this.store.dispatch( new fromTodo.ClearTodoAction() );
  }

}
