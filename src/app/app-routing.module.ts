import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MotherPageComponent } from './pageMother/mother-page/mother-page.component';

const routes: Routes = [
  {
    path: '',
    component: MotherPageComponent,
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
