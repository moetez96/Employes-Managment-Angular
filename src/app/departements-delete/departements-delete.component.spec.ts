import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartementsDeleteComponent } from './departements-delete.component';

describe('DepartementsDeleteComponent', () => {
  let component: DepartementsDeleteComponent;
  let fixture: ComponentFixture<DepartementsDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartementsDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartementsDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
