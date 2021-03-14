import { Overlay } from '@angular/cdk/overlay';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { mockEnrollees } from '../mocks/enrollees-mock';
import { EnrollmentListService } from '../services/enrollment-list.service';

import { EnrollmentListComponent } from './enrollment-list.component';

describe('EnrollmentListComponent', () => {
  let component: EnrollmentListComponent;
  let fixture: ComponentFixture<EnrollmentListComponent>;
  const enrollmentListServiceSpy = jasmine.createSpyObj(
    'EnrollmentListService', [ 'getEnrollees', 'updateEnrollee' ]
  );
  const snackBarServiceSpy = jasmine.createSpyObj(
    'SnackBarService', [ 'openSnackBar' ]
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollmentListComponent);

    TestBed.configureTestingModule({
      declarations: [ EnrollmentListComponent ],
      providers: [
        { provide: MatDialog, useValue: {}},
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
        { provide: EnrollmentListService, useValue: enrollmentListServiceSpy },
        { provide: SnackbarService, useValue: snackBarServiceSpy},
        MatSnackBar,
        Overlay
      ]
    });

    component = fixture.componentInstance;
    component.enrolleeList = [ ...mockEnrollees ];
    fixture.detectChanges();
  });
});
