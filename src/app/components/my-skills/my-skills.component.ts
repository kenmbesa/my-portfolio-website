import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent implements OnInit {
  @HostBinding('@.disabled') //Disable animations in this component
  public animationsDisabled = true; // Set to true to disable animations

  constructor() { }

  ngOnInit(): void {
  }

}
