import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Association } from '@app/core/interfaces';

@Component({
  selector: 'app-association-details-dialog',
  templateUrl: 'association-details-dialog.component.html',
})
export class AssociationDetailsDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public association: Association, private dialogRef: MatDialogRef<AssociationDetailsDialogComponent>) {}
}
