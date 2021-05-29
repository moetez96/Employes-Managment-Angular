import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeDeleteComponent } from './employe-delete.component';

describe('EmployeDeleteComponent', () => {
  let component: EmployeDeleteComponent;
  let fixture: ComponentFixture<EmployeDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
