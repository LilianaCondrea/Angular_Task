import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Area, Thing } from '../../shared/services/api.service';

@Component({
  selector: 'app-module2-area',
  templateUrl: './module2-area.component.html',
  styleUrls: ['./module2-area.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Module2AreaComponent {
  @Input() area: Area;
  @Input() things: Array<Thing>;
}
