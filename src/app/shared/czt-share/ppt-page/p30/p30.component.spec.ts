import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P30Component } from './p30.component';

describe('P30Component', () => {
    let component: P30Component;
    let fixture: ComponentFixture<P30Component>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [P30Component],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(P30Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
