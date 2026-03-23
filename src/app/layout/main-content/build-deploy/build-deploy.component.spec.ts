import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildDeployComponent } from './build-deploy.component';

describe('BuildDeployComponent', () => {
  let component: BuildDeployComponent;
  let fixture: ComponentFixture<BuildDeployComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildDeployComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildDeployComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
