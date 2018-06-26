import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P39Component } from './p39.component';

describe('P39Component', () => {
  let component: P39Component;
  let fixture: ComponentFixture<P39Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P39Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
