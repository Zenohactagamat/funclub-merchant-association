import { Component, OnInit } from '@angular/core';
import { Association } from '@app/core/interfaces';
import { AssociationService } from '@app/core/services/association.service';

@Component({
  templateUrl: './associations.component.html',
  styleUrls: ['./associations.component.scss'],
})
export class AssociationsComponent implements OnInit {
  associations: Association[];

  constructor(private associationService: AssociationService) {}

  ngOnInit(): void {
    this.associations = this.associationService.getAssociations();
  }
}
