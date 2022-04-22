import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JedwaliComponent } from './jedwali.component';

describe('JedwaliComponent', () => {
  let component: JedwaliComponent;
  let fixture: ComponentFixture<JedwaliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JedwaliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JedwaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
