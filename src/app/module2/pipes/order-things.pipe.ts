import { Pipe, PipeTransform } from '@angular/core';

import { Thing } from '../../shared/services/api.service';

@Pipe({
  name: 'orderThings',
  pure: true,
})
export class OrderThingsPipe implements PipeTransform {
  transform(things: Array<Thing>): Array<Thing> {
    // Create connections array {parent;childs}
    let connectionsArray: Array<{ parent: Thing; childs: Array<Thing> }> = [];

    // Find parents (thing.joinedWith === null)
    things.forEach(el => {
      if (!el.joinedWith) connectionsArray.push({ parent: el, childs: [] });
    });

    // Find childs for every parent
    for (let i = 0; i < connectionsArray.length; i++) {
      connectionsArray[i].childs = things.filter(
        el => el.joinedWith == connectionsArray[i].parent.id
      );
    }

    // Create new array and push elements in new order
    let newThings: Array<Thing> = [];
    for (let el of connectionsArray) {
      newThings.push(el.parent);
      newThings.push(...el.childs);
    }
    return newThings;
  }
}
