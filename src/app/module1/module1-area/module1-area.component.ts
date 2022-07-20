import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

import { Area, Thing } from '../../shared/services/api.service';

@Component({
  selector: 'app-module1-area',
  templateUrl: './module1-area.component.html',
  styleUrls: ['./module1-area.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Module1AreaComponent implements OnInit {
  @Input() area: Area;
  @Input() things: Array<Thing>;

  constructor() {}

  ngOnInit() {
    let connectionsArray: Array<{ parent: Thing; childs: Array<Thing> }> = [];

    this.things.forEach(el => {
      if (!el.joinedWith) connectionsArray.push({ parent: el, childs: [] });
    });

    for (let i = 0; i < connectionsArray.length; i++) {
      connectionsArray[i].childs = this.things.filter(
        el => el.joinedWith == connectionsArray[i].parent.id
      );
    }

    let newThings: Array<Thing> = [];
    for (let el of connectionsArray) {
      newThings.push(el.parent);
      newThings.push(...el.childs);
    }

    this.things = [...newThings];
  }
}
