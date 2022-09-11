import { Injectable } from '@angular/core';
import { Association } from '../interfaces/association';
import { associationSamples } from './association-samples';

@Injectable({
  providedIn: 'root',
})
export class AssociationService {
  constructor() {}

  getAssociations(): Association[] {
    return associationSamples;
  }
}
