import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenkuComponent } from './venku.component';

describe('VenkuComponent', () => {
  let component: VenkuComponent;
  let fixture: ComponentFixture<VenkuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenkuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenkuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
