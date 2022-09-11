import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociationSelectionFormDialogComponent } from './association-selection-form-dialog.component';

describe('AssociationSelectionFormDialogComponent', () => {
  let component: AssociationSelectionFormDialogComponent;
  let fixture: ComponentFixture<AssociationSelectionFormDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssociationSelectionFormDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AssociationSelectionFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
