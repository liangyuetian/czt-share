import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P36Component } from './p36.component';

describe('P36Component', () => {
  let component: P36Component;
  let fixture: ComponentFixture<P36Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P36Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
