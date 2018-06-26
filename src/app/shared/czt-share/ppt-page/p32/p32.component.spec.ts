import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P32Component } from './p32.component';

describe('P32Component', () => {
  let component: P32Component;
  let fixture: ComponentFixture<P32Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P32Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
