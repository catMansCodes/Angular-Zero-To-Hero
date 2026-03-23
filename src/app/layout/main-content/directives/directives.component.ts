import { NgClass, NgFor, NgIf, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageTitleComponent } from '../../page-title/page-title.component';

@Component({
  selector: 'app-directives',
  imports: [
    PageTitleComponent,
    RouterLink,
    NgIf,
    NgFor,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
    NgClass,
    NgStyle,
  ],
  templateUrl: './directives.component.html',
})
export class DirectivesComponent {
  heading = signal<string>('Directives in Angular');
  subHeading = signal<string>(
    'Structural and attribute directives, built-ins, and how they compare to the new control flow.'
  );

  /** *ngIf demo — 2024 is a leap year */
  isLeapYear = true;

  userList = [
    { userId: 101, userName: 'Jarvis', userEmail: 'jarvis@example.com' },
    { userId: 102, userName: 'Tony', userEmail: 'tony@example.com' },
    { userId: 103, userName: 'Victor', userEmail: 'victor@example.com' },
    { userId: 104, userName: 'Susan', userEmail: 'susan@example.com' },
  ];

  readonly weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] as const;

  today = 'Monday';

  /** ngClass demo */
  highlightRow = signal(false);

  /** ngStyle demo */
  emphasisSize = signal(16);

  changeDay(day: string): void {
    this.today = day;
  }

  toggleHighlight(): void {
    this.highlightRow.update((v) => !v);
  }

  bumpFontSize(delta: number): void {
    this.emphasisSize.update((n) => Math.min(28, Math.max(12, n + delta)));
  }
}
