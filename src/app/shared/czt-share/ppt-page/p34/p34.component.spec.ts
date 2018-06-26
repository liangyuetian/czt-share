import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P34Component } from './p34.component';

describe('P34Component', () => {
  let component: P34Component;
  let fixture: ComponentFixture<P34Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P34Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
