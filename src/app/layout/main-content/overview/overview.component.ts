import { Component, signal } from '@angular/core';
import { PageTitleComponent } from "../../page-title/page-title.component";

@Component({
  selector: 'app-overview',
  imports: [PageTitleComponent],
  templateUrl: './overview.component.html',
})
export class OverviewComponent {
  heading = signal<string>('An Overview of Angular 19 Application');
  subHeading = signal<string>('Learn Angular 19 with practical examples and references.');
}
