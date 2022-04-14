import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.scss']
})
export class MyProjectsComponent implements OnInit {
  @HostBinding('@.disabled') //Disable animations in this component
  public animationsDisabled = true; // Set to true to disable animations

  constructor() { }

  ngOnInit(): void {
  }

}
