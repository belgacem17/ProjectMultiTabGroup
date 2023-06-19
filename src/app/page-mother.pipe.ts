import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pageMother'
})
export class PageMotherPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
