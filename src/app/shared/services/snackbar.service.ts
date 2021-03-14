import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackBar: MatSnackBar) { }

  openSnackBar(message: string, action: string, timeInSeconds: number): void {
    this.snackBar.open(
      message,
      action,
      {
        duration: 1000 * timeInSeconds
      }
    );
  }
}
