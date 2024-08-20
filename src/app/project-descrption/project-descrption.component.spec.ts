import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDescrptionComponent } from './project-descrption.component';

describe('ProjectDescrptionComponent', () => {
  let component: ProjectDescrptionComponent;
  let fixture: ComponentFixture<ProjectDescrptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectDescrptionComponent]
    });
    fixture = TestBed.createComponent(ProjectDescrptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
