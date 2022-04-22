import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PabzzyComponent } from './pabzzy.component';

describe('PabzzyComponent', () => {
  let component: PabzzyComponent;
  let fixture: ComponentFixture<PabzzyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PabzzyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PabzzyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
