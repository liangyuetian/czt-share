import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P18Component } from './p18.component';

describe('P18Component', () => {
    let component: P18Component;
    let fixture: ComponentFixture<P18Component>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [P18Component],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(P18Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
