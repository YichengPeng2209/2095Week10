import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'w10strsub'
})
export class W10strsubPipe implements PipeTransform {

  transform(value: number, ...args: any[]): number {
    let transformedAge: number = 0;
    transformedAge = 2021 - value
    return transformedAge;
  }


}
