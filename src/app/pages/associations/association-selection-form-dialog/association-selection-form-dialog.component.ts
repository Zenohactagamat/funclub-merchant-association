import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Association } from '@app/core/interfaces';

@Component({
  selector: 'app-association-selection-form-dialog',
  templateUrl: './association-selection-form-dialog.component.html',
  styleUrls: ['./association-selection-form-dialog.component.scss'],
})
export class AssociationSelectionFormDialogComponent implements OnInit {
  subscriptionForm: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public association: Association, private dialogRef: MatDialogRef<AssociationSelectionFormDialogComponent>, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.subscriptionForm = this.fb.group({
      couponDate: ['', Validators.required],
      merchantCode: ['', Validators.required],
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  get couponDate() {
    return this.subscriptionForm.get('couponDate');
  }

  get merchantCode() {
    return this.subscriptionForm.get('merchantCode');
  }

  get firstname() {
    return this.subscriptionForm.get('firstname');
  }

  get lastname() {
    return this.subscriptionForm.get('lastname');
  }

  get email() {
    return this.subscriptionForm.get('email');
  }
}
