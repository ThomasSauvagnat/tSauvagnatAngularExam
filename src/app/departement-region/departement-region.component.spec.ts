import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartementRegionComponent } from './departement-region.component';

describe('DepartementRegionComponent', () => {
  let component: DepartementRegionComponent;
  let fixture: ComponentFixture<DepartementRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartementRegionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartementRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
