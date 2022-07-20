import { Pipe, PipeTransform } from '@angular/core';
import { Thing } from '../services/api.service';

@Pipe({
  name: 'thingsByAreaId',
  pure: true,
})
export class ThingsByAreaIdPipe implements PipeTransform {
  transform(things: Array<Thing> | null, id: number): Array<Thing> {
    return things!.filter(el => el.areaId === id);
  }
}
