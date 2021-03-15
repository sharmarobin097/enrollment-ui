import * as XLSX from 'xlsx';

export enum AnimationTimes {
  SnackBar = 5,
}

export enum ExcelFileNames {
  EnrollmentList = 'Enrollment List',
}

export const enrollmentListColWidths: XLSX.ColInfo[] = [
  { wch: 40 },
  { wch: 20 },
  { wch: 20 },
  { wch: 20 },
];
