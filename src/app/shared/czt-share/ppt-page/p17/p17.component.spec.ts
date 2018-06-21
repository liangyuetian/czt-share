import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P17Component } from './p17.component';

describe('P17Component', () => {
    let component: P17Component;
    let fixture: ComponentFixture<P17Component>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [P17Component],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(P17Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
