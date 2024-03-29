import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo/model/todo.model';
import * as fromFilter from '../store/filter/filter.actions';

@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform( todos: Todo[], filter: fromFilter.validFilters): any {

    switch (filter) {
      case 'completed':
        return todos.filter( todo => todo.completed );

      case 'pending':
        return todos.filter( todo => !todo.completed );

      default:
        return todos;

    }

  }

}
