import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatFormFieldControl } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

import { SearchFieldComponent } from './search-field.component';

@NgModule({
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  declarations: [SearchFieldComponent],
  providers: [{ provide: MatFormFieldControl, useExisting: SearchFieldComponent }],
  exports: [SearchFieldComponent]
})
export class SearchFieldModule {}
