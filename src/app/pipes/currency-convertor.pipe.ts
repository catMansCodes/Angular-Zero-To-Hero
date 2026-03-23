import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConvertor',
  standalone: true,
})
export class CurrencyConvertorPipe implements PipeTransform {
  /** Demo: multiply base amount by optional INR rate (default × 90). */
  transform(value: number, ...args: number[]): number {
    if (args.length > 0) {
      const [rate] = args;
      return value * rate;
    }
    return value * 90;
  }
}
