import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P38Component } from './p38.component';

describe('P38Component', () => {
  let component: P38Component;
  let fixture: ComponentFixture<P38Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P38Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
