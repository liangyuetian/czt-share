import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P37Component } from './p37.component';

describe('P37Component', () => {
  let component: P37Component;
  let fixture: ComponentFixture<P37Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P37Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
