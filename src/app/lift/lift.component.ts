import { Component, OnInit, Input } from '@angular/core';
import { TodoListService, EnricherService } from '../enricher.service';
import { Observable } from 'rxjs';
import { TodoListPublicService } from '../enricher-public.service';
import { TodoListPrivateService } from '../enricher-private.service';
import { Todo , LiftActivities } from '../enricher.interfaces';


@Component({
  selector: 'app-lift',
  templateUrl: './lift.component.html',
  providers: [{ provide: TodoListService, useClass: TodoListPrivateService }],
  styleUrls: ['./lift.component.scss']
})
export class LiftComponent implements OnInit {
  books$: Object;
  todos: Todo[];
  activities$: Observable<LiftActivities>;

  constructor(private enricherService: EnricherService, private todoListService: TodoListService) { }

  ngOnInit() {
    this.enricherService.getBooks().subscribe(
      data => this.books$ = data 
    );

    this.todos = this.todoListService.getTodos();
    this.enricherService.getActivities().subscribe(data => this.activities$ = data );


  }

}
