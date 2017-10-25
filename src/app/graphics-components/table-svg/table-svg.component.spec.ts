import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSvgComponent } from './table-svg.component';

describe('TableSvgComponent', () => {
  let component: TableSvgComponent;
  let fixture: ComponentFixture<TableSvgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableSvgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
