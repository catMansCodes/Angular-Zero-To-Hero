import { Component, signal } from '@angular/core';
import { PageTitleComponent } from "../../page-title/page-title.component";

@Component({
  selector: 'app-home',
  imports: [PageTitleComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  heading = signal<string>('Angular Zero To Hero with version 19');
  subHeading = signal<string>('Explore Angular 19 with practical examples and references.');
}
