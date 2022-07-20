import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Thing } from '../../shared/services/api.service';

@Component({
  selector: 'app-module2-thing',
  templateUrl: './module2-thing.component.html',
  styleUrls: ['./module2-thing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Module2ThingComponent {
  @Input() thing: Thing;
}
