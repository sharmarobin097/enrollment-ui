import * as XLSX from 'xlsx';

export enum AnimationTimes {
  SnackBar = 5,
}

export enum ExcelFileNames {
  EnrollmentList = 'Enrollment List',
}

export const enrollmentListColWidths: XLSX.ColInfo[] = [
  { wch: 40 },
  { wch: 40 },
  { wch: 10 },
  { wch: 10 },
];
