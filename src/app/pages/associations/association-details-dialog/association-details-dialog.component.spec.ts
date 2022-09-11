import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociationDetailsDialogComponent } from './association-details-dialog.component';

describe('AssociationDetailsDialogComponent', () => {
  let component: AssociationDetailsDialogComponent;
  let fixture: ComponentFixture<AssociationDetailsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssociationDetailsDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AssociationDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
