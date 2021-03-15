import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root'
})
export class ExcelExportService {

  constructor() { }

  exportToExcel<T>(data: T[], fileName: string, excelColumnWidths: XLSX.ColInfo[]): void {

    // generate worksheet
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
    // column widths
    ws['!cols'] = excelColumnWidths;

    // generate workbook and add the worksheet
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    // save to file
    XLSX.writeFile(wb, `${fileName}.xlsx`);
  }
}
