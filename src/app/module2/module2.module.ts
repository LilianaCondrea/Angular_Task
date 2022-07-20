import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { Module2MainComponent } from './module2-main/module2-main.component';
import { Module2AreaComponent } from './module2-area/module2-area.component';
import { Module2ThingComponent } from './module2-thing/module2-thing.component';
import { SharingModule } from '../shared/sharing.module';
import { OrderThingsPipe } from './pipes/order-things.pipe';

const routes: Routes = [
  {
    path: '',
    component: Module2MainComponent,
  },
];

@NgModule({
  declarations: [
    Module2MainComponent,
    Module2AreaComponent,
    Module2ThingComponent,
    OrderThingsPipe,
  ],
  imports: [SharingModule, CommonModule, RouterModule.forChild(routes)],
})
export class Module2Module {}
