import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Association } from '@app/core/interfaces';
import { AssociationService } from '@app/core/services/association.service';
import { AssociationDetailsDialogComponent } from './association-details-dialog/association-details-dialog.component';
import { AssociationSelectionFormDialogComponent } from './association-selection-form-dialog/association-selection-form-dialog.component';

@Component({
  templateUrl: './associations.component.html',
  styleUrls: ['./associations.component.scss'],
})
export class AssociationsComponent implements OnInit {
  associations: Association[];

  constructor(private associationService: AssociationService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.associations = this.associationService.getAssociations();
  }

  showDetails(association: Association) {
    const dialogRef = this.dialog.open(AssociationDetailsDialogComponent, {
      data: association,
    });

    dialogRef.afterClosed().subscribe((selectedId) => {
      if (!selectedId) return;

      this.showForm(association);
    });
  }

  /**
   * Show form for given association data
   * @param association
   */
  showForm(association: Association) {
    const dialogRef = this.dialog.open(AssociationSelectionFormDialogComponent, {
      data: association,
    });
  }
}
