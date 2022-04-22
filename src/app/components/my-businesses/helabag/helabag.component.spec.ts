import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelabagComponent } from './helabag.component';

describe('HelabagComponent', () => {
  let component: HelabagComponent;
  let fixture: ComponentFixture<HelabagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelabagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelabagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
