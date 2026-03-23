import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageTitleComponent } from '../../page-title/page-title.component';

@Component({
  selector: 'app-state',
  imports: [PageTitleComponent, RouterLink],
  templateUrl: './state.component.html',
})
export class StateComponent {
  heading = signal<string>('State management in Angular');
  subHeading = signal<string>(
    'From local component state to shared services, NgRx, and signal-based stores.'
  );
}
