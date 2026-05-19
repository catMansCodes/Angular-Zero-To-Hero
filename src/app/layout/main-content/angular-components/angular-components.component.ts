import { Component, signal } from '@angular/core';
import { PageTitleComponent } from '../../page-title/page-title.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-angular-components',
  imports: [PageTitleComponent,RouterLink],
  templateUrl: './angular-components.component.html',
})
export class AngularComponentsComponent {
  heading = signal<string>(
    'Components or building blocks in Angular application',
  );
  subHeading = signal<string>(
    'Explore the fundamentals of Angular components, including architecture and lifecycle hooks, template syntax and data binding, event handling and two-way binding, component communication (Input/Output), standalone and reusable components, decorators, and building a simple counter application.',
  );
}
