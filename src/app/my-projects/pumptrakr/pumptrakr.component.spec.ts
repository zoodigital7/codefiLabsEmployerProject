import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PumptrakrComponent } from './pumptrakr.component';

describe('PumptrakrComponent', () => {
  let component: PumptrakrComponent;
  let fixture: ComponentFixture<PumptrakrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PumptrakrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PumptrakrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
