import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Thing } from '../../shared/services/api.service';

@Component({
  selector: 'app-module1-thing',
  templateUrl: './module1-thing.component.html',
  styleUrls: ['./module1-thing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Module1ThingComponent {
  @Input() thing: Thing;
  constructor() {}
}
