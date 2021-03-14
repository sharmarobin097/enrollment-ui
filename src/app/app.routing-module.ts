import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'enrollment',
    loadChildren: () => import('./features/enrollment/enrollment.module').then(m => m.EnrollmentModule)
  },
  {
    path: '',
    redirectTo: 'enrollment',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
