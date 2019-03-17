import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../model/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app/app.reducer';
import { ToggleTodoAction, UpdateTodoAction, DeleteTodoAction } from '../../store/todo/todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('txtInputElement') txtInputElement: ElementRef;

  chkField: FormControl;
  txtInput: FormControl;
  editing: boolean;

  constructor( private store: Store<AppState> ) { }

  ngOnInit() {
    this.chkField = new FormControl( this.todo.completed );
    this.txtInput = new FormControl( this.todo.text, Validators.required );

    this.chkField.valueChanges.subscribe( value => {
      this.store.dispatch( new ToggleTodoAction( this.todo.id ) );
    });
  }

  edit() {
    this.editing = true;
    setTimeout(() => {
      this.txtInputElement.nativeElement.select();
    });
  }

  updateElement() {
    this.editing = false;
    if( this.txtInput.invalid ||  this.todo.text === this.txtInput.value ){
      return;
    }else{
      this.store.dispatch( new UpdateTodoAction( this.todo.id, this.txtInput.value ) );
    }
  }

  delete() {
    this.store.dispatch( new DeleteTodoAction( this.todo.id ) );
  }

}
