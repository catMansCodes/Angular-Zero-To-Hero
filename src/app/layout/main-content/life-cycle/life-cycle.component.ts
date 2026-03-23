import { AfterViewInit, Component, OnDestroy, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageTitleComponent } from '../../page-title/page-title.component';

@Component({
  selector: 'app-life-cycle',
  imports: [PageTitleComponent, RouterLink],
  templateUrl: './life-cycle.component.html',
  styleUrl: './life-cycle.component.scss'
})
export class LifeCycleComponent implements OnInit, AfterViewInit, OnDestroy {
  heading = signal<string>('Life Cycle of Angular Components');
  subHeading = signal<string>(
    'Lifecycle hooks let you run code at specific moments from creation to destruction.'
  );

  /** Messages appended when hooks run on this page (see section 5 in the template). */
  hookLog = signal<string[]>([]);

  private pushLog(message: string): void {
    const ts = new Date().toLocaleTimeString();
    this.hookLog.update((list) => [...list, `[${ts}] ${message}`]);
  }

  ngOnInit(): void {
    this.pushLog('ngOnInit — first pass after inputs are set; use for setup and data loading.');
  }

  ngAfterViewInit(): void {
    this.pushLog('ngAfterViewInit — view is ready; @ViewChild and child components are available.');
  }

  ngOnDestroy(): void {
    // UI may not update after this; use console for a reliable signal when leaving the route.
    console.log('[LifeCycle demo] ngOnDestroy — unsubscribe, clear timers, and detach listeners here.');
  }
}
