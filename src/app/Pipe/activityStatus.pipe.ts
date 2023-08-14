import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'activityStatus',
})
export class ActivityStatusPipe implements PipeTransform {
  transform(aktivnost: any): any {
    const today = new Date();
    const activityDate = new Date(aktivnost.datum);

    console.log('Danas' + today);
    console.log('Drugo' + activityDate);

    if (activityDate < today) {
      return 'red'; // Aktivnost koja je prošla
    } else if (activityDate > today) {
      return 'blue'; // Aktivnost koja je danas
    } else {
      return 'yellow'; // Aktivnost koja dolazi
    }
  }
}
