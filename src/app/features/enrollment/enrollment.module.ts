import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnrollmentListComponent } from './enrollment-list/enrollment-list.component';
import { EnrollmentRoutingModule } from './enrollment-routing.module';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivationStatusPipe } from 'src/app/shared/pipes/active-status.pipe';
import { DashesOrValuePipe } from 'src/app/shared/pipes/dashes-or-value.pipe';
import { SharedMaterialModule } from 'src/app/shared/material.module';

@NgModule({
  declarations: [
    ActivationStatusPipe,
    EnrollmentListComponent,
    EditDialogComponent,
    DashesOrValuePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EnrollmentRoutingModule,
    SharedMaterialModule
  ]
})
export class EnrollmentModule { }
