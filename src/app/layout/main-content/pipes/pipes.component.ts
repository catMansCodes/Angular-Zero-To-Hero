import { AsyncPipe, CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Observable, of } from 'rxjs';
import { CurrencyConvertorPipe } from '../../../pipes/currency-convertor.pipe';
import { PageTitleComponent } from '../../page-title/page-title.component';

@Component({
  selector: 'app-pipes',
  imports: [
    PageTitleComponent,
    RouterLink,
    CurrencyConvertorPipe,
    UpperCasePipe,
    LowerCasePipe,
    DatePipe,
    DecimalPipe,
    CurrencyPipe,
    AsyncPipe,
  ],
  templateUrl: './pipes.component.html',
})
export class PipesComponent {
  heading = signal<string>('Pipes in Angular');
  subHeading = signal<string>(
    'Transform template data with built-in pipes, async, and custom pipes.'
  );

  /** Base value for the custom converter demo */
  baseAmount = signal(1);

  /** Built-in demos */
  demoText = signal('Angular Pipes');
  demoDate = signal(new Date());
  demoNumber = signal(1234.5678);
  demoPrice = signal(49.99);

  /** Async pipe demo */
  readonly asyncDemo$: Observable<string> = of('Resolved with async pipe');

  /** Shown in docs (avoids raw `{{` in template) */
  readonly syntaxPipe = '{{ value | pipeName:arg }}';
  readonly syntaxCustomPipe = '{{ baseAmount() | currencyConvertor }}';
}
