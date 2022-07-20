import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { Module1MainComponent } from './module1-main/module1-main.component';
import { Module1AreaComponent } from './module1-area/module1-area.component';
import { Module1ThingComponent } from './module1-thing/module1-thing.component';
import { SharingModule } from '../shared/sharing.module';

const routes: Routes = [{ path: '', component: Module1MainComponent }];

@NgModule({
  declarations: [
    Module1MainComponent,
    Module1AreaComponent,
    Module1ThingComponent,
  ],
  imports: [SharingModule, CommonModule, RouterModule.forChild(routes)],
})
export class Module1Module {}
