import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-portfolio-website';

  @HostBinding('@.disabled') //Disable animations in this component
  public animationsDisabled = true; // Set to true to disable animations

  // playSound() {
  //   let audio = new Audio();
  //   audio.src = '..\src\assets\audio\swipe-sound.mp3';
  //   audio.load();
  //   audio.play();
  // }
}
