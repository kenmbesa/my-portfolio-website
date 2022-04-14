import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {
  @HostBinding('@.disabled') //Disable animations in this component
  public animationsDisabled = true; // Set to true to disable animations

  constructor() { }

  ngOnInit(): void {
  }

}
