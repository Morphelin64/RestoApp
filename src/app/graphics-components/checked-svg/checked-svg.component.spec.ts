import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckedSvgComponent } from './checked-svg.component';

describe('CheckedSvgComponent', () => {
  let component: CheckedSvgComponent;
  let fixture: ComponentFixture<CheckedSvgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckedSvgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckedSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
