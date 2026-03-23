import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageTitleComponent } from '../../page-title/page-title.component';
import { TodoItem } from '../../../interfaces/TodoItem';
import { TodoFilter } from '../../../types/TodoFilter';

@Component({
  selector: 'app-signals',
  imports: [PageTitleComponent, RouterLink],
  templateUrl: './signals.component.html',
})
export class SignalsComponent {
  heading = signal<string>('Signals in Angular');
  subHeading = signal<string>(
    'Reactive state with signal(), computed(), and a small TODO app driven entirely by signals.'
  );

  /** Demo counter for the “computed” explanation */
  demoCount = signal(0);

  /** Derived: double the demo counter */
  demoDoubled = computed(() => this.demoCount() * 2);

  /** --- TODO app (signal state) --- */
  todos = signal<TodoItem[]>([
    { id: '1', title: 'Learn signal()', done: true },
    { id: '2', title: 'Try computed()', done: false },
  ]);

  newTodoTitle = signal('');
  filter = signal<TodoFilter>('all');

  /** List after filter */
  visibleTodos = computed(() => {
    const f = this.filter();
    const list = this.todos();
    if (f === 'active') {
      return list.filter((t) => !t.done);
    }
    if (f === 'completed') {
      return list.filter((t) => t.done);
    }
    return list;
  });

  stats = computed(() => {
    const list = this.todos();
    const active = list.filter((t) => !t.done).length;
    return {
      total: list.length,
      active,
      completed: list.length - active,
    };
  });

  bumpDemo(): void {
    this.demoCount.update((n) => n + 1);
  }

  setNewTitleFromInput(event: Event): void {
    const v = (event.target as HTMLInputElement).value;
    this.newTodoTitle.set(v);
  }

  addTodo(): void {
    const title = this.newTodoTitle().trim();
    if (!title) {
      return;
    }
    const item: TodoItem = {
      id: typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
      title,
      done: false,
    };
    this.todos.update((list) => [...list, item]);
    this.newTodoTitle.set('');
  }

  toggleTodo(id: string): void {
    this.todos.update((list) =>
      list.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  }

  removeTodo(id: string): void {
    this.todos.update((list) => list.filter((t) => t.id !== id));
  }

  setFilter(f: TodoFilter): void {
    this.filter.set(f);
  }

  clearCompleted(): void {
    this.todos.update((list) => list.filter((t) => !t.done));
  }
}
