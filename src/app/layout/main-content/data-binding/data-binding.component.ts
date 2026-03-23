import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { PageTitleComponent } from '../../page-title/page-title.component';

@Component({
  selector: 'app-data-binding',
  imports: [PageTitleComponent, FormsModule, RouterLink],
  templateUrl: './data-binding.component.html',
})
export class DataBindingComponent {
  heading = signal<string>('Data Binding in Angular');
  subHeading = signal<string>(
    'Connect your template to the component class with interpolation, property, event, and two-way binding.'
  );

  /** Shown in docs so templates do not need raw `{{` / `}}` in markup */
  readonly syntax = {
    interpolation: '{{ expression }}',
    property: '[target]="expression"',
    event: '(event)="handler($event)"',
    twoWay: '[(ngModel)]="property"',
  } as const;

  /** Interpolation & property-binding demos */
  bookTitle = 'How to Make Mark 42';
  author = 'M. Stark';
  displayPrice = 1200;

  /** [class] / dynamic Bootstrap utilities */
  alertClasses = 'alert alert-success mb-0';
  panelClasses = 'rounded border p-4 mb-0 bg-dark text-white border-secondary';

  /** [property] binding — native input type toggles */
  inputType: 'checkbox' | 'text' = 'checkbox';

  /** Two-way binding (requires FormsModule) */
  bookName = 'The One Thing';

  showWelcome(): void {
    window.alert('Event binding: button click runs a method in the component class.');
  }

  setPanelTheme(theme: 'dark' | 'light'): void {
    this.panelClasses =
      theme === 'dark'
        ? 'rounded border p-4 mb-0 bg-dark text-white border-secondary'
        : 'rounded border p-4 mb-0 bg-light text-dark border-secondary';
  }

  setDisplayPriceTo500(): void {
    this.displayPrice = 500;
  }

  toggleInputType(): void {
    this.inputType = this.inputType === 'checkbox' ? 'text' : 'checkbox';
  }
}
