import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService, Area, Thing } from '../../shared/services/api.service';

@Component({
  selector: 'app-module2-main',
  templateUrl: './module2-main.component.html',
  styleUrls: ['./module2-main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Module2MainComponent {
  areas$: Observable<Array<Area>>;
  things$: Observable<Array<Thing>>;

  constructor(private api: ApiService) {
    this.areas$ = this.api.getAreas();
    this.things$ = this.api.getThings();
  }
}
