import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDiComponent } from './service-di.component';

describe('ServiceDiComponent', () => {
  let component: ServiceDiComponent;
  let fixture: ComponentFixture<ServiceDiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceDiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceDiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
