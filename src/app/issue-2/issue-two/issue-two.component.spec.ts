import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {IssueTwoComponent} from './issue-two.component';

describe('IssueTwoComponent', () => {
  let component: IssueTwoComponent;
  let fixture: ComponentFixture<IssueTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({declarations: [IssueTwoComponent]})
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
