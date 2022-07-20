import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';

import { ApiService, Area, Thing } from '../../shared/services/api.service';

@Component({
  selector: 'app-module1-main',
  templateUrl: './module1-main.component.html',
  styleUrls: ['./module1-main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Module1MainComponent implements OnInit {
  areas: Array<Area>;
  things: Array<Thing>;

  constructor(private api: ApiService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.api.getAreas().subscribe(res => {
      this.areas = [...res];
      this.cdr.markForCheck();
      console.log('area');
    });
    this.api.getThings().subscribe(res => {
      this.things = [...res];
      this.cdr.markForCheck();
      console.log('things');
    });
  }
}
