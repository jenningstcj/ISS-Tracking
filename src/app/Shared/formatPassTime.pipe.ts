import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'formatPassTime'})
export class FormatPassTimePipe implements PipeTransform {
  transform(value: number): string {
    return (new Date(value * 1000)).toString();
  }
}
