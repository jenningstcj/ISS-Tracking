import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'formatDurationTime' })
export class FormatDurationTimePipe implements PipeTransform {
    transform(value: number): string {
        let visible = Math.round(value / 60);
        return Math.round(visible / 2).toString() + "min";
    }
}
