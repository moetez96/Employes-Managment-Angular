import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeAddComponent } from './employe-add.component';

describe('EmployeAddComponent', () => {
  let component: EmployeAddComponent;
  let fixture: ComponentFixture<EmployeAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
