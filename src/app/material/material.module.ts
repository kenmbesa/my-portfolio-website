import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatMenuModule } from '@angular/material/menu';

const materials = [
  MatSidenavModule,
  MatFormFieldModule,
  MatListModule,
  MatIconModule,
  MatDialogModule,
  MatProgressBarModule,
  MatMenuModule
]

@NgModule({
  imports: [ materials ],
  exports: [ materials ]
})
export class MaterialModule { }

