import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFormEmployeeComponent } from './template-form-employee.component';

describe('TemplateFormEmployeeComponent', () => {
  let component: TemplateFormEmployeeComponent;
  let fixture: ComponentFixture<TemplateFormEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateFormEmployeeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateFormEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
