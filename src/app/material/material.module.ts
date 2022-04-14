import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

const materials = [
  MatSidenavModule,
  MatFormFieldModule,
  MatListModule,
  MatIconModule,
  MatDialogModule
]

@NgModule({
  imports: [ materials ],
  exports: [ materials ]
})
export class MaterialModule { }

