import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[];
  constructor( private ts:TodoService ) {
    
   }

  ngOnInit() {
   this.ts.getTodos().subscribe(todo => {
    this.todos= todo;
   });
  }

}
