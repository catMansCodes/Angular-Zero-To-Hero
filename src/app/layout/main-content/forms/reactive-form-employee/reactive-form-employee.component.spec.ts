import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormEmployeeComponent } from './reactive-form-employee.component';

describe('ReactiveFormEmployeeComponent', () => {
  let component: ReactiveFormEmployeeComponent;
  let fixture: ComponentFixture<ReactiveFormEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormEmployeeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
