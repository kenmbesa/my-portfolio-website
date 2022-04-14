import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  @HostBinding('@.disabled') //Disable animations in this component
  public animationsDisabled = true; // Set to true to disable animations

  constructor() { }

  ngOnInit(

  ): void {
  }

}
