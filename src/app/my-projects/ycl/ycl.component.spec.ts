import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YclComponent } from './ycl.component';

describe('YclComponent', () => {
  let component: YclComponent;
  let fixture: ComponentFixture<YclComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YclComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YclComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
