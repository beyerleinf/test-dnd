import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueFourtyfourComponent } from './issue-fourtyfour.component';

describe('IssueFourtyfourComponent', () => {
  let component: IssueFourtyfourComponent;
  let fixture: ComponentFixture<IssueFourtyfourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueFourtyfourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueFourtyfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
