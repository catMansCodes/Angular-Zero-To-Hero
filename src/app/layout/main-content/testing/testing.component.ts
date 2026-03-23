import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageTitleComponent } from '../../page-title/page-title.component';

@Component({
  selector: 'app-testing',
  imports: [PageTitleComponent, RouterLink],
  templateUrl: './testing.component.html',
})
export class TestingComponent {
  heading = signal<string>('Testing Angular applications');
  subHeading = signal<string>(
    'Unit tests with Jasmine & Karma, component and service testing, HTTP mocks, E2E, and coverage.'
  );
}
