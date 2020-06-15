import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyHuf'
})
export class CurrencyHufPipe implements PipeTransform {

  transform(value: number): string {
    return value.toFixed(0) + ' Ft';
  }

}
