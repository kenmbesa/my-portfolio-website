import { Component, HostBinding } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ShareDialogComponent } from './components/share-dialog/share-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-portfolio-website';

  @HostBinding('@.disabled') //Disable animations in this component
  public animationsDisabled = true; // Set to true to disable animations

  constructor (public dialog: MatDialog) {}

  openDialog () {
    this.dialog.open(ShareDialogComponent);
  }
}
