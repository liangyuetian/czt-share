import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P35Component } from './p35.component';

describe('P35Component', () => {
  let component: P35Component;
  let fixture: ComponentFixture<P35Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P35Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
