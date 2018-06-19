import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PptPageComponent } from './ppt-page.component';

describe('PptPageComponent', () => {
  let component: PptPageComponent;
  let fixture: ComponentFixture<PptPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PptPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PptPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
