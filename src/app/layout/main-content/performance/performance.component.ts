import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageTitleComponent } from '../../page-title/page-title.component';

@Component({
  selector: 'app-performance',
  imports: [PageTitleComponent, RouterLink],
  templateUrl: './performance.component.html',
})
export class PerformanceComponent {
  heading = signal<string>('Performance in Angular');
  subHeading = signal<string>(
    'Change detection, OnPush, lazy loading, bundles, and techniques for fast Angular apps.'
  );
}
