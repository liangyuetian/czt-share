import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P33Component } from './p33.component';

describe('P33Component', () => {
  let component: P33Component;
  let fixture: ComponentFixture<P33Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P33Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
