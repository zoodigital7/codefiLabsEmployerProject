import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpsquadComponent } from './upsquad.component';

describe('UpsquadComponent', () => {
  let component: UpsquadComponent;
  let fixture: ComponentFixture<UpsquadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpsquadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpsquadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
