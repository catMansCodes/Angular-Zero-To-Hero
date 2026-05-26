import { Component, input } from '@angular/core';

@Component({
  selector: 'app-page-title',
  imports: [],
  templateUrl: './page-title.component.html',
})
export class PageTitleComponent {
  pageTitle = input<string>('');
  pageSubtitle = input<string>('');
}
