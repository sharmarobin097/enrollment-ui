import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AnimationTimes, enrollmentListColWidths, ExcelFileNames } from 'src/app/shared/constants/global-constants';
import { ExportExcelService } from 'src/app/shared/services/export-excel.service';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { Enrollee } from '../interfaces/enrollee.interface';
import { EnrollmentListService } from '../services/enrollment-list.service';

@Component({
  selector: 'app-enrollment-list',
  templateUrl: './enrollment-list.component.html',
  styleUrls: ['./enrollment-list.component.scss']
})
export class EnrollmentListComponent implements AfterViewInit {
  enrolleeList: Enrollee[];
  dataSource: MatTableDataSource<Enrollee>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = [
    'id',
    'name',
    'active',
    'dateOfBirth',
    'editIcon'
  ];

  constructor(
    private enrollmentListService: EnrollmentListService,
    private excelExportService: ExportExcelService,
    private dialog: MatDialog,
    private snackBarService: SnackbarService
  ) { }

  ngAfterViewInit(): void {
    this.initializeTable();
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  exportToExcel(): void {
    const formattedExcelData = this.enrolleeList.map(
      (enrollee) => {
        const formattedObj = {
          id: enrollee.id,
          name: enrollee.name,
          'Activation Status': enrollee.active ? 'Active' : 'Inactive',
          'Date of Birth': enrollee.dateOfBirth || '',
        };
        return formattedObj;
      }
    );
    const excelArray = formattedExcelData.map(Object.values);
    const fileName = ExcelFileNames.EnrollmentList;
    const excelColumnWidths = enrollmentListColWidths;
    this.excelExportService.exportToExcel(excelArray, fileName, excelColumnWidths);
  }

  openEditDialog(enrollee: Enrollee): void {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      data: { ...enrollee }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.enrollmentListService.updateEnrollee(result).subscribe(
          response => {
            if (response) {
              const timeInSeconds = AnimationTimes.SnackBar;
              const snackBarMessage = `Enrollee with id ${response.id} successfully updated!`;
              const snackBarAction = '';
              this.snackBarService.openSnackBar(snackBarMessage, snackBarAction, timeInSeconds);
              this.initializeTable();
            }
          }
        );
      }
    });
  }

  initializeTable(): void {
    this.enrollmentListService.getEnrollees().subscribe(
      response => {
        this.enrolleeList = response;
        this.dataSource = new MatTableDataSource(response);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }
}
