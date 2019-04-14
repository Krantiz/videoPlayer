import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'customUppercasePipe'})
export class CustomUppercasePipe implements PipeTransform {
  transform(value: string): string {
    return value.toUpperCase();
  }
}