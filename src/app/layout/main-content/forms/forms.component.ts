import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageTitleComponent } from '../../page-title/page-title.component';

@Component({
  selector: 'app-forms',
  imports: [PageTitleComponent, RouterLink],
  templateUrl: './forms.component.html',
})
export class FormsComponent {
  heading = signal<string>('Forms in Angular');
  subHeading = signal<string>(
    'Template-driven and reactive approaches, validation patterns, and practical employee demos.'
  );
}
