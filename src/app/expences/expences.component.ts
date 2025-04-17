import { Component } from '@angular/core';
import { generateClient } from 'aws-amplify/data';
import { Schema } from '../../../amplify/data/resource';

const client = generateClient<Schema>();

@Component({
  selector: 'app-expences',
  templateUrl: './expences.component.html',
  styleUrl: './expences.component.css',
})
export class ExpencesComponent {
  todos: any[] = [];

  ngOnInit(): void {
    this.listTodos();
  }

  listTodos() {
    try {
      client.models.Expense.observeQuery().subscribe({
        next: ({ items, isSynced }) => {
          this.todos = items;
        },
      });
    } catch (error) {
      console.error('error fetching todos', error);
    }
  }

  createTodo() {
    try {
      client.models.Expense.create({
        name: window.prompt('Todo content'),
      });
      this.listTodos();
    } catch (error) {
      console.error('error creating todos', error);
    }
  }

  deleteTodo(id: string) {
    client.models.Expense.delete({ id });
  }
}
