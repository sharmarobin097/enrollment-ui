import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivationStatus } from '../interfaces/activation-status.interface';
import { Enrollee } from '../interfaces/enrollee.interface';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent implements OnInit {
  enrollee: Enrollee;
  activationStatuses: ActivationStatus[] = [
    {
      value: true,
      viewValue: 'Active'
    },
    {
      value: false,
      viewValue: 'Inactive'
    }
  ];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Enrollee
  ) { }

  ngOnInit(): void {
    this.enrollee = this.data;
  }

  saveEnrollee(form: NgForm): void {
    this.enrollee = form.value;
  }

}
