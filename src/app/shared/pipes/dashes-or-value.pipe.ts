import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dashesOrValue'
})
export class DashesOrValuePipe implements PipeTransform {

  transform<T>(value: T): T | string {
    return value ? value : '---';
  }

}
