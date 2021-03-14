import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnrollmentListComponent } from './enrollment-list/enrollment-list.component';

export const routes: Routes = [
  {
    path: 'enrollment-list',
    component: EnrollmentListComponent
  },
  {
    path: '',
    redirectTo: 'enrollment-list'
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [ RouterModule ]
})
export class EnrollmentRoutingModule {}
