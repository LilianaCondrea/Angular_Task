import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: 'module1',
    loadChildren: () =>
      import('./module1/module1.module').then(t => t.Module1Module),
  },
  {
    path: 'module2',
    loadChildren: () =>
      import('./module2/module2.module').then(t => t.Module2Module),
  },
  {
    path: '',
    component: MainComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
