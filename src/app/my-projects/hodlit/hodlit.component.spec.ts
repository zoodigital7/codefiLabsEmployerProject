import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HodlitComponent } from './hodlit.component';

describe('HodlitComponent', () => {
  let component: HodlitComponent;
  let fixture: ComponentFixture<HodlitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HodlitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HodlitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
