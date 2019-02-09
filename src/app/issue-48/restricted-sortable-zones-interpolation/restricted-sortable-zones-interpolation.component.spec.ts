import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestrictedSortableZonesInterpolationComponent } from './restricted-sortable-zones-interpolation.component';

describe('RestrictedSortableZonesInterpolationComponent', () => {
  let component: RestrictedSortableZonesInterpolationComponent;
  let fixture: ComponentFixture<RestrictedSortableZonesInterpolationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestrictedSortableZonesInterpolationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestrictedSortableZonesInterpolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
